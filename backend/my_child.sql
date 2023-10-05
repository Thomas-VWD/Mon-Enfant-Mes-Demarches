-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: my_child
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Files`
--

DROP TABLE IF EXISTS `Files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Files` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `File_name` varchar(255) NOT NULL,
  `Categorie` varchar(255) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `User_ID` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `User_ID` (`User_ID`),
  CONSTRAINT `Files_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `User` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Files`
--

LOCK TABLES `Files` WRITE;
/*!40000 ALTER TABLE `Files` DISABLE KEYS */;
/*!40000 ALTER TABLE `Files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RDV`
--

DROP TABLE IF EXISTS `RDV`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RDV` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `RDV_name` varchar(255) NOT NULL,
  `date_of_rdv` date DEFAULT NULL,
  `User_ID` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `User_ID` (`User_ID`),
  CONSTRAINT `RDV_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `User` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RDV`
--

LOCK TABLES `RDV` WRITE;
/*!40000 ALTER TABLE `RDV` DISABLE KEYS */;
/*!40000 ALTER TABLE `RDV` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Renewal`
--

DROP TABLE IF EXISTS `Renewal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Renewal` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Renewal_name` varchar(255) NOT NULL,
  `date_of_renewal` date DEFAULT NULL,
  `User_ID` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `User_ID` (`User_ID`),
  CONSTRAINT `Renewal_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `User` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Renewal`
--

LOCK TABLES `Renewal` WRITE;
/*!40000 ALTER TABLE `Renewal` DISABLE KEYS */;
/*!40000 ALTER TABLE `Renewal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Child_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'Matteo','toto@to.fr','toto01'),(2,'Lucas','luc@to.fr','toto02');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-28 15:50:13
