<?php
$url = file_get_contents('https://jsonplaceholder.typicode.com/todos');
$result = json_decode($url, true);

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>testing</title>
</head>
<body>
    <div class="container bg-red-300 mx-auto">
        <div class="w-[90%] bg-blue-200 flex flex-wrap gap-4 mx-auto justify-center">
            <?php foreach($result as $row): ?>
            <div class="w-[30%] bg-green-300">
                <h1>userID : <?= $row['userId']; ?></h1>
                <h1>id : <?= $row['id']; ?></h1>
                <h1>title : <?= $row['title']; ?></h1>
                <h1>completed : <?= $row['completed']; ?></h1>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</body>
</html>