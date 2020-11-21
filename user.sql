/*
Navicat MySQL Data Transfer

Source Server         : shetiaUser
Source Server Version : 50524
Source Host           : localhost:3306
Source Database       : user

Target Server Type    : MYSQL
Target Server Version : 50524
File Encoding         : 65001

Date: 2020-11-21 16:24:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `password_digest` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'shetia', '123', '123', '');
INSERT INTO `user` VALUES ('2', '123', '123', '123', 'tianan.xie.os@infinitus-int.com');
INSERT INTO `user` VALUES ('3', '1234', '123', '123', 'tianan.xie.os@infinitus-int.com');
INSERT INTO `user` VALUES ('4', '222', '123', '123', 'tianan.xie.os@infinitus-int.com');
