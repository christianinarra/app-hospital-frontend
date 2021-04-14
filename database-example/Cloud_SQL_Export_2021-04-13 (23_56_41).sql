-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: apphospitaldb
-- ------------------------------------------------------
-- Server version	5.7.32-google-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `apphospitaldb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `apphospitaldb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `apphospitaldb`;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_birth` datetime DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `profile_photo` varchar(255) DEFAULT NULL,
  `id_hospital` int(11) NOT NULL,
  `public_id_cloudinary` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_user` varchar(255) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_user` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkq26jku3y65eiki7okiak8cgs` (`id_hospital`),
  CONSTRAINT `FKkq26jku3y65eiki7okiak8cgs` FOREIGN KEY (`id_hospital`) REFERENCES `hospital` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (4,'1967-04-14 20:00:00','Lamba--','Victor','http://res.cloudinary.com/dtpvwe64y/image/upload/v1618344754/d532clwc7llevcyniopd.jpg',2,'d532clwc7llevcyniopd','2021-04-13 12:58:34','CHRISTIAN','2021-04-13 19:09:03','CHRISTIAN','Villa 1ro de mayo final plaza'),(5,'1976-02-03 20:00:00','Laures Valdes','Maria','http://res.cloudinary.com/dtpvwe64y/image/upload/v1618344859/g8yrue70k5h34vg1bl4x.jpg',3,'g8yrue70k5h34vg1bl4x','2021-04-13 16:14:06','CHRISTIAN','2021-04-13 16:14:19','CHRISTIAN',NULL),(6,'1983-06-07 20:00:00','Smith','James','http://res.cloudinary.com/dtpvwe64y/image/upload/v1618344894/hcge46y4qlkonzsm6eml.jpg',2,'hcge46y4qlkonzsm6eml','2021-04-13 16:14:39','CHRISTIAN','2021-04-13 16:14:55','CHRISTIAN',NULL);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_specialty`
--

DROP TABLE IF EXISTS `doctor_specialty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctor_specialty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_doctor` int(11) NOT NULL,
  `id_specialty` int(11) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_user` varchar(255) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7gwe5e7whe8y4ftvfwbb2y5sp` (`id_doctor`),
  KEY `FK18rkrjkxx4vc18haetddnfss1` (`id_specialty`),
  CONSTRAINT `FK18rkrjkxx4vc18haetddnfss1` FOREIGN KEY (`id_specialty`) REFERENCES `specialty` (`id`),
  CONSTRAINT `FK7gwe5e7whe8y4ftvfwbb2y5sp` FOREIGN KEY (`id_doctor`) REFERENCES `doctor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_specialty`
--

LOCK TABLES `doctor_specialty` WRITE;
/*!40000 ALTER TABLE `doctor_specialty` DISABLE KEYS */;
INSERT INTO `doctor_specialty` VALUES (1,4,1,NULL,NULL,NULL,NULL),(2,4,3,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `doctor_specialty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historic`
--

DROP TABLE IF EXISTS `historic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_visit` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `id_doctor` int(11) NOT NULL,
  `id_patient` int(11) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_user` varchar(255) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKi6xmky4nj6rlaj2iqgrcjhtbn` (`id_doctor`),
  KEY `FK3w4wsf4au9pwviviki1aqjdco` (`id_patient`),
  CONSTRAINT `FK3w4wsf4au9pwviviki1aqjdco` FOREIGN KEY (`id_patient`) REFERENCES `patient` (`id`),
  CONSTRAINT `FKi6xmky4nj6rlaj2iqgrcjhtbn` FOREIGN KEY (`id_doctor`) REFERENCES `doctor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historic`
--

LOCK TABLES `historic` WRITE;
/*!40000 ALTER TABLE `historic` DISABLE KEYS */;
INSERT INTO `historic` VALUES (2,'2021-04-08 20:00:00','Visita nro 2',5,1,'2021-04-13 18:19:46','CHRISTIAN','2021-04-13 18:19:46','CHRISTIAN'),(6,'2012-01-31 20:00:00','Visit nro 3',6,1,'2021-04-13 18:45:51','CHRISTIAN','2021-04-13 18:45:51','CHRISTIAN');
/*!40000 ALTER TABLE `historic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hospital` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_user` varchar(255) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
INSERT INTO `hospital` VALUES (1,'asdasdasdasdasd','Hospital Obrero de Bolivia',NULL,NULL,NULL,NULL),(2,'asdfsadfasdfsdf','Hospital Municipal de Montero',NULL,NULL,'2021-04-13 16:13:00','CHRISTIAN'),(3,'sdsdfsdfsadfasdfasdf','Clinica Privada Foianini','2021-04-13 12:14:27','CHRISTIAN','2021-04-13 16:13:26','CHRISTIAN'),(4,'asdfsdfasdfsadf','Clinica Santa Cruz','2021-04-14 03:30:52','CHRISTIAN','2021-04-14 03:30:52','CHRISTIAN');
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_birth` datetime DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `profile_photo` varchar(255) DEFAULT NULL,
  `public_id_cloudinary` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_user` varchar(255) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_user` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'2021-04-06 20:00:00','Perez--','Jose','http://res.cloudinary.com/dtpvwe64y/image/upload/v1618345028/omhkk5v7tfiqgrmxegqo.jpg','omhkk5v7tfiqgrmxegqo',NULL,NULL,'2021-04-13 17:50:15','CHRISTIAN',NULL),(2,'2005-02-01 20:00:00','Rada','Cristian','http://res.cloudinary.com/dtpvwe64y/image/upload/v1618345080/khnx1n2y0wkb7da7dyjk.jpg','khnx1n2y0wkb7da7dyjk','2021-04-13 16:17:39','CHRISTIAN','2021-04-13 16:18:00','CHRISTIAN',NULL),(3,'2021-04-13 00:00:00','Martanzo','Peter','',NULL,'2021-04-14 03:31:27','CHRISTIAN','2021-04-14 03:31:27','CHRISTIAN','dfasdfasdfasdf');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialty`
--

DROP TABLE IF EXISTS `specialty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specialty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar_icon` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `public_id_cloudinary` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_user` varchar(255) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialty`
--

LOCK TABLES `specialty` WRITE;
/*!40000 ALTER TABLE `specialty` DISABLE KEYS */;
INSERT INTO `specialty` VALUES (1,'http://res.cloudinary.com/dtpvwe64y/image/upload/v1618344526/nckjh499d37ugl5mxpiu.jpg','asdasdasd ----','Cardiologia','nckjh499d37ugl5mxpiu',NULL,NULL,'2021-04-13 16:08:48','CHRISTIAN'),(2,'http://res.cloudinary.com/dtpvwe64y/image/upload/v1618344547/yktlkkznty9qjh2r23qz.jpg','asdasdasdsad','Traumatologia','yktlkkznty9qjh2r23qz','2021-04-13 15:41:57','CHRISTIAN','2021-04-13 16:09:08','CHRISTIAN'),(3,'http://res.cloudinary.com/dtpvwe64y/image/upload/v1618344623/wibuvizazjqe3pe3sojy.jpg','asdklajsdjklasd','Odontologia','wibuvizazjqe3pe3sojy','2021-04-13 16:09:18','CHRISTIAN','2021-04-13 16:10:23','CHRISTIAN'),(4,'http://res.cloudinary.com/dtpvwe64y/image/upload/v1618344650/dtaeelrcmkiqb597xjpr.jpg','sdfasdfasdfasdfasdf','Fisioterapia','dtaeelrcmkiqb597xjpr','2021-04-13 16:10:41','CHRISTIAN','2021-04-13 16:10:51','CHRISTIAN');
/*!40000 ALTER TABLE `specialty` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-14  4:03:22
