<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

$to = 'careers@venturisholdings.com';
$subject = "New Job Application — {$input['fullName']} — {$input['position']}";

$message = "
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #0d9488, #0f172a); padding: 30px; text-align: center; }
        .header h1 { color: #fff; margin: 0; font-size: 22px; }
        .header p { color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px; }
        .body { padding: 30px; }
        .section { margin-bottom: 24px; }
        .section-title { font-size: 14px; font-weight: 700; color: #0d9488; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 12px; padding-bottom: 6px; border-bottom: 2px solid #0d9488; }
        .row { display: flex; padding: 6px 0; border-bottom: 1px solid #f0f0f0; }
        .label { width: 140px; font-size: 13px; color: #888; flex-shrink: 0; }
        .value { font-size: 13px; color: #333; }
        .cover-letter { font-size: 13px; color: #333; line-height: 1.6; white-space: pre-wrap; padding: 12px; background: #f9f9f9; border-radius: 8px; margin: 8px 0 0; }
        .footer { padding: 20px 30px; background: #f9f9f9; text-align: center; font-size: 12px; color: #aaa; border-top: 1px solid #eee; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>New Job Application Received</h1>
            <p>A new application has been submitted via the Venturis Holdings careers portal.</p>
        </div>
        <div class='body'>
";

$message .= "<div class='section'><div class='section-title'>Personal Information</div>";
$message .= "<div class='row'><div class='label'>Full Name</div><div class='value'>{$input['fullName']}</div></div>";
$message .= "<div class='row'><div class='label'>Email</div><div class='value'>{$input['email']}</div></div>";
$message .= "<div class='row'><div class='label'>Phone</div><div class='value'>{$input['phone']}</div></div>";
$message .= "<div class='row'><div class='label'>Address</div><div class='value'>" . ($input['address'] ?: 'Not provided') . "</div></div>";
$message .= "</div>";

$message .= "<div class='section'><div class='section-title'>Position Details</div>";
$message .= "<div class='row'><div class='label'>Position</div><div class='value'>{$input['position']}</div></div>";
$message .= "<div class='row'><div class='label'>Division</div><div class='value'>{$input['division']}</div></div>";
$message .= "<div class='row'><div class='label'>Employment Type</div><div class='value'>{$input['employmentType']}</div></div>";
$message .= "<div class='row'><div class='label'>Start Date</div><div class='value'>" . ($input['startDate'] ?: 'Not specified') . "</div></div>";
$message .= "</div>";

$message .= "<div class='section'><div class='section-title'>Experience</div>";
$message .= "<div class='row'><div class='label'>Years of Experience</div><div class='value'>" . ($input['experience'] ?: 'Not specified') . "</div></div>";
$message .= "<div class='row'><div class='label'>Current Company</div><div class='value'>" . ($input['currentCompany'] ?: 'Not specified') . "</div></div>";
$message .= "<div class='row'><div class='label'>Current Role</div><div class='value'>" . ($input['currentRole'] ?: 'Not specified') . "</div></div>";
$message .= "</div>";

$message .= "<div class='section'><div class='section-title'>Education</div>";
$message .= "<div class='row'><div class='label'>Qualification</div><div class='value'>{$input['qualification']}</div></div>";
$message .= "<div class='row'><div class='label'>Field of Study</div><div class='value'>" . ($input['fieldOfStudy'] ?: 'Not specified') . "</div></div>";
$message .= "<div class='row'><div class='label'>Institution</div><div class='value'>" . ($input['institution'] ?: 'Not specified') . "</div></div>";
$message .= "</div>";

$message .= "<div class='section'><div class='section-title'>Links</div>";
$message .= "<div class='row'><div class='label'>LinkedIn</div><div class='value'>" . ($input['linkedinUrl'] ?: 'Not provided') . "</div></div>";
$message .= "<div class='row'><div class='label'>Portfolio</div><div class='value'>" . ($input['portfolioUrl'] ?: 'Not provided') . "</div></div>";
$message .= "<div class='row'><div class='label'>Resume</div><div class='value'>" . ($input['resumeUrl'] ?: 'Not uploaded') . "</div></div>";
$message .= "<div class='row'><div class='label'>Resume Name</div><div class='value'>" . ($input['resumeFileName'] ?: 'Not uploaded') . "</div></div>";
$message .= "</div>";

if (!empty($input['coverLetter'])) {
    $message .= "<div class='section'><div class='section-title'>Cover Letter</div>";
    $message .= "<div class='cover-letter'>" . htmlspecialchars($input['coverLetter']) . "</div>";
    $message .= "</div>";
}

$message .= "<div class='row'><div class='label'>How they heard</div><div class='value'>" . ($input['hearAbout'] ?: 'Not specified') . "</div></div>";

$message .= "
        </div>
        <div class='footer'>
            This email was sent from the Venturis Holdings careers portal.<br>
            Venturis Holdings LLC &mdash; UAE
        </div>
    </div>
</body>
</html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: careers@venturisholdings.com\r\n";
$headers .= "Reply-To: {$input['email']}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $message, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
