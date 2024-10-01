<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $appName = $_POST['appName'];

    // Validate email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Append email and app name to a file
        $file = fopen('downloads.txt', 'a');
        fwrite($file, "Email: $email, App: $appName\n");
        fclose($file);

        echo "Data saved successfully.";
    } else {
        echo "Invalid email address.";
    }
}
?>
