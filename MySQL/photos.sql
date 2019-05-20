-- MySQL dump 10.13  Distrib 8.0.16, for Windows (x86_64)
--
-- Host: localhost    Database: photos
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `PHOTO_POST`
--

DROP TABLE IF EXISTS `PHOTO_POST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `PHOTO_POST` (
  `POST_ID` int(11) NOT NULL,
  `DESCRIPTION` varchar(200) NOT NULL,
  `CREATION_DATE` datetime NOT NULL,
  `PHOTO_LINK` varchar(45) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  PRIMARY KEY (`POST_ID`),
  KEY `PHOTO_POST_USER_idx` (`USER_ID`),
  CONSTRAINT `PHOTO_POST_USER` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PHOTO_POST`
--

LOCK TABLES `PHOTO_POST` WRITE;
/*!40000 ALTER TABLE `PHOTO_POST` DISABLE KEYS */;
INSERT INTO `PHOTO_POST` VALUES (1,'desc1','2019-05-07 07:52:13','link1',1),(2,'desc2','2019-05-04 14:52:02','link2',2),(3,'desc3','2016-02-01 18:22:53','link3',3),(4,'desc4','2019-06-10 14:59:11','link4',4),(5,'desc5','2018-04-25 21:52:13','link5',5),(6,'desc6','2019-10-04 01:13:14','link6',6),(7,'desc7','2019-12-23 19:31:43','link7',7),(8,'desc8','2018-02-05 14:53:02','link8',8),(9,'desc9','2019-01-13 23:57:31','link9',9),(10,'desc10','2017-05-09 22:25:31','link10',10),(11,'desc11','2019-05-07 13:46:01','link11',11),(12,'desc12','2018-10-26 17:18:43','link12',4),(13,'desc13','2019-05-07 13:46:01','link13',11),(14,'desc14','2019-10-02 06:56:32','link14',6),(15,'desc15','2019-05-07 13:46:01','link15',4),(16,'desc16','2019-05-07 13:46:01','link16',11),(17,'des hello c17','2019-05-07 13:46:01','link17',11);
/*!40000 ALTER TABLE `PHOTO_POST` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `USER` (
  `USER_ID` int(11) NOT NULL,
  `NAME` varchar(45) NOT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USER`
--

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES (1,'petrov'),(2,'galkin'),(3,'pugacg'),(4,'sasha'),(5,'dima'),(6,'katy'),(7,'garry'),(8,'liza'),(9,'romashko'),(10,'link'),(11,'krab'),(12,'pups'),(13,'gav');
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-20 20:01:52