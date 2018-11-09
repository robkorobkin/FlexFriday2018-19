-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Aug 02, 2017 at 02:48 AM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `compa`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `company_id` int(11) NOT NULL,
  `company_linkedinid` int(11) NOT NULL,
  `company_name` text NOT NULL,
  `company_category` text NOT NULL,
  `company_location` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`company_id`, `company_linkedinid`, `company_name`, `company_category`, `company_location`) VALUES
(1, 11637, 'WEX', 'Financial Services', 'South Portland, Maine'),
(2, 21836, 'CyberCoders', 'Staffing and Recruiting', 'Irvine, CA '),
(3, 85153, 'Pro Search Inc.', 'Staffing and Recruiting', 'Portland, Maine'),
(4, 2701, 'Liberty Mutual Insurance', 'Insurance', 'Boston, MA');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `job_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `job_status` text NOT NULL,
  `job_title` text NOT NULL,
  `job_company` text NOT NULL,
  `job_area` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`job_id`, `company_id`, `job_status`, `job_title`, `job_company`, `job_area`) VALUES
(1, 3, 'open', 'Programmer', 'Pro Search Inc.', 'Portland, Maine'),
(2, 1, 'filled', 'Software Development Engineer 4', 'WEX', 'Portland, Maine'),
(3, 2, 'open', 'Senior Software Developer', 'CyberCoders', 'Portland, Maine'),
(4, 3, 'filled', 'Salesforce Developer', 'Pro Search Inc.', 'Portland, Maine'),
(5, 1, 'open', 'Senior .Net/C# Developer', 'WEX', 'Portland, Maine'),
(6, 4, 'open', 'Software Developer', 'Liberty Mutual Insurance', 'Greater Boston'),
(7, 1, 'open', 'Software Development Engineer 3', 'WEX', 'Portland, Maine'),
(8, 2, 'open', 'Database Developer - Backend - C# Programmer', 'CyberCoders', 'Greater Boston'),
(9, 1, 'open', 'Outside Sales Representative - Athletically Minded', 'WEX', 'Portland, Maine');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`job_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
