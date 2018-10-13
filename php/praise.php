<?php
header("Content-type: text/html; charset=utf-8");

class ConMysql {
  public $servername;
  public $username;
  public $password;
  public $dbname;
  public $con = '';

  public function __construct($servername, $username, $password, $dbname) {
    $this->servername = $servername;
    $this->username = $username;
    $this->password = $password;
    $this->dbname = $dbname; 
  }

  public function getConnection () {
    try {
      $dsn = "mysql:host=$this->servername; dbname=$this->dbname";
      $this->con = new PDO($dsn, $this->username, $this->password);
    } catch (PDOException $e) {
      echo $e->getMessage();
    }
  }

  public function updateData ($sql) {
    if ($this->con == null) {
      $this->getConnection();
    } else {
      $res = $this->con->exec($sql);
      $arr = array('redult'=>$res);
      echo json_encode($arr);
      $this->close();
    }
  }

  public function close () {
    $this->con = null;
  }
}

class RealCon extends ConMysql {
  public function __construct($servername, $username, $password, $dbname) {
    parent::__construct($servername, $username, $password, $dbname);
  }

  public function updateRealData () {
    $sql = "UPDATE text SET num=num+1 WHERE id=1";
    $this->updateData($sql);
  }
}

$praiseC = new RealCon('localhost', 'root', '', 'praise');
$praiseC->updateRealData();
?>