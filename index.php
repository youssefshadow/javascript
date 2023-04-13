<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>algo note</title>
</head>
<body>
    <form action="" method="post">
        <label for="notes">Saisir la liste des notes (séparées par une virgule) :</label>
        <input type="text" name="notes">
        <input type="submit" value="calculer" name="submit">
    </form>
</body>
</html>
<?php
    if(isset($_POST['submit'])){
        if(!empty($_POST['notes'])){
            $notes = explode(',',$_POST['notes']);
            echo 'La moyenne est égale à : '. array_sum($notes)/count($notes);
        }
        else{
            echo 'Veuillez saisir la liste des notes';
        }
    }
?>