-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 30, 2012 at 11:51 AM
-- Server version: 5.5.25
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `wordpress`
--

-- --------------------------------------------------------

--
-- Table structure for table `wp_commentmeta`
--
DROP TABLE IF EXISTS `wp_commentmeta`;
CREATE TABLE `wp_commentmeta` (
  `meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `comment_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext,
  PRIMARY KEY (`meta_id`),
  KEY `comment_id` (`comment_id`),
  KEY `meta_key` (`meta_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `wp_comments`
--
DROP TABLE IF EXISTS `wp_comments`;
CREATE TABLE `wp_comments` (
  `comment_ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `comment_post_ID` bigint(20) unsigned NOT NULL DEFAULT '0',
  `comment_author` tinytext NOT NULL,
  `comment_author_email` varchar(100) NOT NULL DEFAULT '',
  `comment_author_url` varchar(200) NOT NULL DEFAULT '',
  `comment_author_IP` varchar(100) NOT NULL DEFAULT '',
  `comment_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_content` text NOT NULL,
  `comment_karma` int(11) NOT NULL DEFAULT '0',
  `comment_approved` varchar(20) NOT NULL DEFAULT '1',
  `comment_agent` varchar(255) NOT NULL DEFAULT '',
  `comment_type` varchar(20) NOT NULL DEFAULT '',
  `comment_parent` bigint(20) unsigned NOT NULL DEFAULT '0',
  `user_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`comment_ID`),
  KEY `comment_post_ID` (`comment_post_ID`),
  KEY `comment_approved_date_gmt` (`comment_approved`,`comment_date_gmt`),
  KEY `comment_date_gmt` (`comment_date_gmt`),
  KEY `comment_parent` (`comment_parent`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `wp_comments`
--

INSERT INTO `wp_comments` (`comment_ID`, `comment_post_ID`, `comment_author`, `comment_author_email`, `comment_author_url`, `comment_author_IP`, `comment_date`, `comment_date_gmt`, `comment_content`, `comment_karma`, `comment_approved`, `comment_agent`, `comment_type`, `comment_parent`, `user_id`) VALUES
(1, 1, 'Mr WordPress', '', 'http://wordpress.org/', '', '2012-11-22 09:20:58', '2012-11-22 09:20:58', 'Hi, this is a comment.<br />To delete a comment, just log in and view the post&#039;s comments. There you will have the option to edit or delete them.', 0, 'post-trashed', '', '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_links`
--
DROP TABLE IF EXISTS `wp_links`;
CREATE TABLE `wp_links` (
  `link_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `link_url` varchar(255) NOT NULL DEFAULT '',
  `link_name` varchar(255) NOT NULL DEFAULT '',
  `link_image` varchar(255) NOT NULL DEFAULT '',
  `link_target` varchar(25) NOT NULL DEFAULT '',
  `link_description` varchar(255) NOT NULL DEFAULT '',
  `link_visible` varchar(20) NOT NULL DEFAULT 'Y',
  `link_owner` bigint(20) unsigned NOT NULL DEFAULT '1',
  `link_rating` int(11) NOT NULL DEFAULT '0',
  `link_updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `link_rel` varchar(255) NOT NULL DEFAULT '',
  `link_notes` mediumtext NOT NULL,
  `link_rss` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`link_id`),
  KEY `link_visible` (`link_visible`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `wp_links`
--

INSERT INTO `wp_links` (`link_id`, `link_url`, `link_name`, `link_image`, `link_target`, `link_description`, `link_visible`, `link_owner`, `link_rating`, `link_updated`, `link_rel`, `link_notes`, `link_rss`) VALUES
(1, 'http://codex.wordpress.org/', 'Documentation', '', '', '', 'Y', 1, 0, '0000-00-00 00:00:00', '', '', ''),
(2, 'http://wordpress.org/news/', 'WordPress Blog', '', '', '', 'Y', 1, 0, '0000-00-00 00:00:00', '', '', 'http://wordpress.org/news/feed/'),
(3, 'http://wordpress.org/support/', 'Support Forums', '', '', '', 'Y', 1, 0, '0000-00-00 00:00:00', '', '', ''),
(4, 'http://wordpress.org/extend/plugins/', 'Plugins', '', '', '', 'Y', 1, 0, '0000-00-00 00:00:00', '', '', ''),
(5, 'http://wordpress.org/extend/themes/', 'Themes', '', '', '', 'Y', 1, 0, '0000-00-00 00:00:00', '', '', ''),
(6, 'http://wordpress.org/support/forum/requests-and-feedback', 'Feedback', '', '', '', 'Y', 1, 0, '0000-00-00 00:00:00', '', '', ''),
(7, 'http://planet.wordpress.org/', 'WordPress Planet', '', '', '', 'Y', 1, 0, '0000-00-00 00:00:00', '', '', '');

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Table structure for table `wp_postmeta`
--
DROP TABLE IF EXISTS `wp_postmeta`;

CREATE TABLE `wp_postmeta` (
  `meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext,
  PRIMARY KEY (`meta_id`),
  KEY `post_id` (`post_id`),
  KEY `meta_key` (`meta_key`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=69 ;

--
-- Dumping data for table `wp_postmeta`
--

INSERT INTO `wp_postmeta` (`meta_id`, `post_id`, `meta_key`, `meta_value`) VALUES
(1, 2, '_wp_page_template', 'default'),
(2, 1, '_wp_trash_meta_status', 'publish'),
(3, 1, '_wp_trash_meta_time', '1353922790'),
(4, 1, '_wp_trash_meta_comments_status', 'a:1:{i:1;s:1:"1";}'),
(5, 5, '_edit_last', '1'),
(6, 5, 'video_video_link', 'http://player.vimeo.com/video/10066407'),
(8, 5, '_edit_lock', '1353923088:1'),
(9, 7, '_wp_attached_file', '2012/11/kanye.jpg'),
(10, 7, '_wp_attachment_metadata', 'a:6:{s:5:"width";s:3:"782";s:6:"height";s:3:"671";s:14:"hwstring_small";s:23:"height=''96'' width=''111''";s:4:"file";s:17:"2012/11/kanye.jpg";s:5:"sizes";a:2:{s:9:"thumbnail";a:3:{s:4:"file";s:17:"kanye-150x150.jpg";s:5:"width";s:3:"150";s:6:"height";s:3:"150";}s:6:"medium";a:3:{s:4:"file";s:17:"kanye-300x257.jpg";s:5:"width";s:3:"300";s:6:"height";s:3:"257";}}s:10:"image_meta";a:10:{s:8:"aperture";s:1:"0";s:6:"credit";s:0:"";s:6:"camera";s:0:"";s:7:"caption";s:0:"";s:17:"created_timestamp";s:1:"0";s:9:"copyright";s:0:"";s:12:"focal_length";s:1:"0";s:3:"iso";s:1:"0";s:13:"shutter_speed";s:1:"0";s:5:"title";s:0:"";}}'),
(13, 9, '_thumbnail_id', '7'),
(14, 9, '_edit_last', '1'),
(15, 9, 'video_video_link', ''),
(17, 9, '_edit_lock', '1353932475:1'),
(19, 12, '_edit_last', '1'),
(20, 12, 'video_video_link', 'http://player.vimeo.com/video/7803829'),
(22, 12, '_edit_lock', '1353923256:1'),
(23, 12, '_wp_trash_meta_status', 'publish'),
(24, 12, '_wp_trash_meta_time', '1353924142'),
(25, 5, '_wp_trash_meta_status', 'publish'),
(26, 5, '_wp_trash_meta_time', '1353924142'),
(27, 16, '_edit_last', '1'),
(28, 16, 'video_video_link', 'http://vimeo.com/10066407'),
(30, 16, '_edit_lock', '1354121058:1'),
(31, 18, '_edit_last', '1'),
(32, 18, 'video_video_link', ''),
(34, 18, '_edit_lock', '1353924871:1'),
(35, 18, '_wp_trash_meta_status', 'publish'),
(36, 18, '_wp_trash_meta_time', '1353928226'),
(37, 18, 'video_video_upload', ''),
(38, 26, '_edit_last', '1'),
(39, 26, '_edit_lock', '1354020767:1'),
(40, 26, '_wp_page_template', 'about.php'),
(41, 29, '_edit_last', '1'),
(42, 29, '_edit_lock', '1354121046:1'),
(43, 29, 'video_video_link', 'http://vimeo.com/54298665'),
(45, 32, '_edit_last', '1'),
(46, 32, '_edit_lock', '1354120854:1'),
(47, 32, 'video_video_link', ''),
(49, 32, '_wp_trash_meta_status', 'publish'),
(50, 32, '_wp_trash_meta_time', '1354120971'),
(51, 32, 'video_video_upload', ''),
(54, 39, '_thumbnail_id', '7'),
(55, 39, '_edit_last', '1'),
(56, 39, 'video_video_link', ''),
(57, 39, '_edit_lock', '1354190631:1'),
(58, 40, '_edit_last', '1'),
(59, 40, 'video_video_link', 'http://vimeo.com/54130221'),
(60, 40, '_edit_lock', '1354191400:1'),
(61, 73, '_wp_attached_file', '2012/11/new.jpg'),
(62, 73, '_wp_attachment_metadata', 'a:6:{s:5:"width";s:3:"783";s:6:"height";s:3:"671";s:14:"hwstring_small";s:23:"height=''96'' width=''112''";s:4:"file";s:15:"2012/11/new.jpg";s:5:"sizes";a:2:{s:9:"thumbnail";a:3:{s:4:"file";s:15:"new-150x150.jpg";s:5:"width";s:3:"150";s:6:"height";s:3:"150";}s:6:"medium";a:3:{s:4:"file";s:15:"new-300x257.jpg";s:5:"width";s:3:"300";s:6:"height";s:3:"257";}}s:10:"image_meta";a:10:{s:8:"aperture";s:1:"0";s:6:"credit";s:0:"";s:6:"camera";s:0:"";s:7:"caption";s:0:"";s:17:"created_timestamp";s:1:"0";s:9:"copyright";s:0:"";s:12:"focal_length";s:1:"0";s:3:"iso";s:1:"0";s:13:"shutter_speed";s:1:"0";s:5:"title";s:0:"";}}'),
(63, 72, '_thumbnail_id', '74'),
(64, 72, '_edit_last', '1'),
(65, 72, 'video_video_link', ''),
(66, 72, '_edit_lock', '1354207798:1'),
(67, 74, '_wp_attached_file', '2012/11/new1.jpg'),
(68, 74, '_wp_attachment_metadata', 'a:6:{s:5:"width";s:3:"782";s:6:"height";s:3:"671";s:14:"hwstring_small";s:23:"height=''96'' width=''111''";s:4:"file";s:16:"2012/11/new1.jpg";s:5:"sizes";a:2:{s:9:"thumbnail";a:3:{s:4:"file";s:16:"new1-150x150.jpg";s:5:"width";s:3:"150";s:6:"height";s:3:"150";}s:6:"medium";a:3:{s:4:"file";s:16:"new1-300x257.jpg";s:5:"width";s:3:"300";s:6:"height";s:3:"257";}}s:10:"image_meta";a:10:{s:8:"aperture";s:1:"0";s:6:"credit";s:0:"";s:6:"camera";s:0:"";s:7:"caption";s:0:"";s:17:"created_timestamp";s:1:"0";s:9:"copyright";s:0:"";s:12:"focal_length";s:1:"0";s:3:"iso";s:1:"0";s:13:"shutter_speed";s:1:"0";s:5:"title";s:0:"";}}');

-- --------------------------------------------------------

--
-- Table structure for table `wp_posts`
--
DROP TABLE IF EXISTS `wp_posts`;
CREATE TABLE `wp_posts` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_author` bigint(20) unsigned NOT NULL DEFAULT '0',
  `post_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content` longtext NOT NULL,
  `post_title` text NOT NULL,
  `post_excerpt` text NOT NULL,
  `post_status` varchar(20) NOT NULL DEFAULT 'publish',
  `comment_status` varchar(20) NOT NULL DEFAULT 'open',
  `ping_status` varchar(20) NOT NULL DEFAULT 'open',
  `post_password` varchar(20) NOT NULL DEFAULT '',
  `post_name` varchar(200) NOT NULL DEFAULT '',
  `to_ping` text NOT NULL,
  `pinged` text NOT NULL,
  `post_modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_modified_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content_filtered` longtext NOT NULL,
  `post_parent` bigint(20) unsigned NOT NULL DEFAULT '0',
  `guid` varchar(255) NOT NULL DEFAULT '',
  `menu_order` int(11) NOT NULL DEFAULT '0',
  `post_type` varchar(20) NOT NULL DEFAULT 'post',
  `post_mime_type` varchar(100) NOT NULL DEFAULT '',
  `comment_count` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `post_name` (`post_name`),
  KEY `type_status_date` (`post_type`,`post_status`,`post_date`,`ID`),
  KEY `post_parent` (`post_parent`),
  KEY `post_author` (`post_author`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=76 ;

--
-- Dumping data for table `wp_posts`
--

INSERT INTO `wp_posts` (`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`) VALUES
(1, 1, '2012-11-22 09:20:58', '2012-11-22 09:20:58', 'Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!', 'Hello world!', '', 'trash', 'open', 'open', '', 'hello-world', '', '', '2012-11-26 09:39:50', '2012-11-26 09:39:50', '', 0, 'http://localhost:8888/?p=1', 0, 'post', '', 1),
(2, 1, '2012-11-22 09:20:58', '2012-11-22 09:20:58', 'This is an example page. It''s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:\n\n<blockquote>Hi there! I''m a bike messenger by day, aspiring actor by night, and this is my blog. I live in Los Angeles, have a great dog named Jack, and I like pi&#241;a coladas. (And gettin'' caught in the rain.)</blockquote>\n\n...or something like this:\n\n<blockquote>The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickies to the public ever since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community.</blockquote>\n\nAs a new WordPress user, you should go to <a href="http://localhost:8888/wp-admin/">your dashboard</a> to delete this page and create new pages for your content. Have fun!', 'Sample Page', '', 'publish', 'open', 'open', '', 'sample-page', '', '', '2012-11-22 09:20:58', '2012-11-22 09:20:58', '', 0, 'http://localhost:8888/?page_id=2', 0, 'page', '', 0),
(4, 1, '2012-11-22 09:20:58', '2012-11-22 09:20:58', 'Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!', 'Hello world!', '', 'inherit', 'open', 'open', '', '1-revision', '', '', '2012-11-22 09:20:58', '2012-11-22 09:20:58', '', 1, 'http://localhost:8888/wordpress/?p=4', 0, 'revision', '', 0),
(5, 1, '2012-11-26 09:40:44', '2012-11-26 09:40:44', '', 'Auto Draft', '', 'trash', 'open', 'open', '', 'auto-draft', '', '', '2012-11-26 10:02:22', '2012-11-26 10:02:22', '', 0, 'http://localhost:8888/wordpress/?post_type=post&#038;p=5', 0, 'post', '', 0),
(6, 1, '2012-11-26 09:39:51', '2012-11-26 09:39:51', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '5-revision', '', '', '2012-11-26 09:39:51', '2012-11-26 09:39:51', '', 5, 'http://localhost:8888/wordpress/?p=6', 0, 'revision', '', 0),
(7, 1, '2012-11-26 09:41:11', '2012-11-26 09:41:11', '', 'kanye', '', 'inherit', 'open', 'open', '', 'kanye', '', '', '2012-11-26 09:41:11', '2012-11-26 09:41:11', '', 5, 'http://localhost:8888/wordpress/wp-content/uploads/2012/11/kanye.jpg', 0, 'attachment', 'image/jpeg', 0),
(8, 1, '2012-11-26 09:40:44', '2012-11-26 09:40:44', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '5-revision-2', '', '', '2012-11-26 09:40:44', '2012-11-26 09:40:44', '', 5, 'http://localhost:8888/wordpress/?p=8', 0, 'revision', '', 0),
(9, 1, '2012-11-26 09:41:29', '2012-11-26 09:41:29', '', 'Kanye', '', 'publish', 'open', 'open', '', 'auto-draft-2', '', '', '2012-11-26 12:23:08', '2012-11-26 12:23:08', '', 0, 'http://localhost:8888/wordpress/?post_type=post&#038;p=9', 0, 'post', '', 0),
(10, 1, '2012-11-26 09:41:21', '2012-11-26 09:41:21', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '9-revision', '', '', '2012-11-26 09:41:21', '2012-11-26 09:41:21', '', 9, 'http://localhost:8888/wordpress/?p=10', 0, 'revision', '', 0),
(11, 1, '2012-11-26 09:41:20', '2012-11-26 09:41:20', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '5-revision-3', '', '', '2012-11-26 09:41:20', '2012-11-26 09:41:20', '', 5, 'http://localhost:8888/wordpress/?p=11', 0, 'revision', '', 0),
(12, 1, '2012-11-26 09:49:16', '2012-11-26 09:49:16', '', 'Auto Draft', '', 'trash', 'open', 'open', '', 'auto-draft-3', '', '', '2012-11-26 10:02:22', '2012-11-26 10:02:22', '', 0, 'http://localhost:8888/wordpress/?post_type=post&#038;p=12', 0, 'post', '', 0),
(13, 1, '2012-11-26 09:48:54', '2012-11-26 09:48:54', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '12-revision', '', '', '2012-11-26 09:48:54', '2012-11-26 09:48:54', '', 12, 'http://localhost:8888/wordpress/?p=13', 0, 'revision', '', 0),
(14, 1, '2012-11-26 09:49:16', '2012-11-26 09:49:16', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '12-revision-2', '', '', '2012-11-26 09:49:16', '2012-11-26 09:49:16', '', 12, 'http://localhost:8888/wordpress/?p=14', 0, 'revision', '', 0),
(15, 1, '2012-11-26 09:42:00', '2012-11-26 09:42:00', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '5-revision-4', '', '', '2012-11-26 09:42:00', '2012-11-26 09:42:00', '', 5, 'http://localhost:8888/wordpress/?p=15', 0, 'revision', '', 0),
(16, 1, '2012-11-26 10:02:45', '2012-11-26 10:02:45', '', 'Vimeo', '', 'publish', 'open', 'open', '', 'auto-draft-4', '', '', '2012-11-28 16:46:09', '2012-11-28 16:46:09', '', 0, 'http://localhost:8888/wordpress/?post_type=post&#038;p=16', 0, 'post', '', 0),
(17, 1, '2012-11-26 10:02:41', '2012-11-26 10:02:41', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '16-revision', '', '', '2012-11-26 10:02:41', '2012-11-26 10:02:41', '', 16, 'http://localhost:8888/wordpress/?p=17', 0, 'revision', '', 0),
(18, 1, '2012-11-26 10:04:05', '2012-11-26 10:04:05', '', 'Auto Draft', '', 'trash', 'open', 'open', '', 'auto-draft-5', '', '', '2012-11-26 11:10:26', '2012-11-26 11:10:26', '', 0, 'http://localhost:8888/wordpress/?post_type=post&#038;p=18', 0, 'post', '', 0),
(19, 1, '2012-11-26 10:04:02', '2012-11-26 10:04:02', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '18-revision', '', '', '2012-11-26 10:04:02', '2012-11-26 10:04:02', '', 18, 'http://localhost:8888/wordpress/?p=19', 0, 'revision', '', 0),
(20, 1, '2012-11-26 10:04:05', '2012-11-26 10:04:05', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '18-revision-2', '', '', '2012-11-26 10:04:05', '2012-11-26 10:04:05', '', 18, 'http://localhost:8888/wordpress/?p=20', 0, 'revision', '', 0),
(21, 1, '2012-11-26 10:02:45', '2012-11-26 10:02:45', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '16-revision-2', '', '', '2012-11-26 10:02:45', '2012-11-26 10:02:45', '', 16, 'http://localhost:8888/wordpress/?p=21', 0, 'revision', '', 0),
(22, 1, '2012-11-26 11:25:51', '2012-11-26 11:25:51', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '16-revision-3', '', '', '2012-11-26 11:25:51', '2012-11-26 11:25:51', '', 16, 'http://localhost:8888/wordpress/?p=22', 0, 'revision', '', 0),
(23, 1, '2012-11-26 09:41:29', '2012-11-26 09:41:29', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '9-revision-2', '', '', '2012-11-26 09:41:29', '2012-11-26 09:41:29', '', 9, 'http://localhost:8888/wordpress/?p=23', 0, 'revision', '', 0),
(24, 1, '2012-11-26 12:22:57', '2012-11-26 12:22:57', '', 'Vimeo', '', 'inherit', 'open', 'open', '', '16-revision-4', '', '', '2012-11-26 12:22:57', '2012-11-26 12:22:57', '', 16, 'http://localhost:8888/wordpress/?p=24', 0, 'revision', '', 0),
(25, 1, '2012-11-26 13:12:56', '2012-11-26 13:12:56', '', 'Vimeo', '', 'inherit', 'open', 'open', '', '16-autosave', '', '', '2012-11-26 13:12:56', '2012-11-26 13:12:56', '', 16, 'http://localhost:8888/wordpress/?p=25', 0, 'revision', '', 0),
(26, 1, '2012-11-27 12:51:04', '2012-11-27 12:51:04', '', 'About', '', 'publish', 'open', 'open', '', 'about', '', '', '2012-11-27 12:51:49', '2012-11-27 12:51:49', '', 0, 'http://localhost:8888/wordpress/?page_id=26', 0, 'page', '', 0),
(27, 1, '2012-11-27 12:51:01', '2012-11-27 12:51:01', '', 'Auto Draft', '', 'inherit', 'open', 'open', '', '26-revision', '', '', '2012-11-27 12:51:01', '2012-11-27 12:51:01', '', 26, 'http://localhost:8888/wordpress/?p=27', 0, 'revision', '', 0),
(28, 1, '2012-11-27 12:51:04', '2012-11-27 12:51:04', '', 'About', '', 'inherit', 'open', 'open', '', '26-revision-2', '', '', '2012-11-27 12:51:04', '2012-11-27 12:51:04', '', 26, 'http://localhost:8888/wordpress/26-revision-2/', 0, 'revision', '', 0),
(29, 1, '2012-11-28 16:37:42', '2012-11-28 16:37:42', '', 'Vimeo 2', '', 'publish', 'open', 'open', '', 'vimeo-2', '', '', '2012-11-28 16:45:55', '2012-11-28 16:45:55', '', 0, 'http://localhost:8888/wordpress/?post_type=post&#038;p=29', 0, 'post', '', 0),
(30, 1, '2012-11-28 16:37:19', '2012-11-28 16:37:19', '', 'Vimeo 2', '', 'inherit', 'open', 'open', '', '29-revision', '', '', '2012-11-28 16:37:19', '2012-11-28 16:37:19', '', 29, 'http://localhost:8888/wordpress/29-revision/', 0, 'revision', '', 0),
(31, 1, '2012-11-28 16:38:42', '2012-11-28 16:38:42', '', 'Vimeo 2', '', 'inherit', 'open', 'open', '', '29-autosave', '', '', '2012-11-28 16:38:42', '2012-11-28 16:38:42', '', 29, 'http://localhost:8888/wordpress/29-autosave/', 0, 'revision', '', 0),
(32, 1, '2012-11-28 16:40:15', '2012-11-28 16:40:15', '', 'Mars', '', 'trash', 'open', 'open', '', 'mars', '', '', '2012-11-28 16:42:51', '2012-11-28 16:42:51', '', 0, 'http://localhost:8888/wordpress/?post_type=post&#038;p=32', 0, 'post', '', 0),
(33, 1, '2012-11-28 16:40:12', '2012-11-28 16:40:12', '', 'Mars', '', 'inherit', 'open', 'open', '', '32-revision', '', '', '2012-11-28 16:40:12', '2012-11-28 16:40:12', '', 32, 'http://localhost:8888/wordpress/32-revision/', 0, 'revision', '', 0),
(34, 1, '2012-11-28 16:41:15', '2012-11-28 16:41:15', '', 'Mars', '', 'inherit', 'open', 'open', '', '32-autosave', '', '', '2012-11-28 16:41:15', '2012-11-28 16:41:15', '', 32, 'http://localhost:8888/wordpress/32-autosave/', 0, 'revision', '', 0),
(35, 1, '2012-11-28 16:40:15', '2012-11-28 16:40:15', '', 'Mars', '', 'inherit', 'open', 'open', '', '32-revision-2', '', '', '2012-11-28 16:40:15', '2012-11-28 16:40:15', '', 32, 'http://localhost:8888/wordpress/32-revision-2/', 0, 'revision', '', 0),
(36, 1, '2012-11-28 16:37:42', '2012-11-28 16:37:42', '', 'Vimeo 2', '', 'inherit', 'open', 'open', '', '29-revision-2', '', '', '2012-11-28 16:37:42', '2012-11-28 16:37:42', '', 29, 'http://localhost:8888/wordpress/29-revision-2/', 0, 'revision', '', 0),
(37, 1, '2012-11-26 13:11:56', '2012-11-26 13:11:56', '', 'Vimeo', '', 'inherit', 'open', 'open', '', '16-revision-5', '', '', '2012-11-26 13:11:56', '2012-11-26 13:11:56', '', 16, 'http://localhost:8888/wordpress/16-revision-5/', 0, 'revision', '', 0),
(38, 1, '2012-11-29 10:59:38', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 10:59:38', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=post&p=38', 0, 'post', '', 0),
(39, 1, '2012-11-29 12:05:23', '2012-11-29 12:05:23', '', '', '', 'publish', 'closed', 'closed', '', '39', '', '', '2012-11-29 12:05:44', '2012-11-29 12:05:44', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&#038;p=39', 0, 'carouselcontent', '', 0),
(40, 1, '2012-11-29 12:05:49', '2012-11-29 12:05:49', '', '', '', 'publish', 'closed', 'closed', '', '40', '', '', '2012-11-29 12:06:10', '2012-11-29 12:06:10', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&#038;p=40', 0, 'carouselcontent', '', 0),
(41, 1, '2012-11-29 12:18:36', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:18:36', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=41', 0, 'carouselcontent', '', 0),
(42, 1, '2012-11-29 12:19:39', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:19:39', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=42', 0, 'carouselcontent', '', 0),
(43, 1, '2012-11-29 12:20:00', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:20:00', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=43', 0, 'carouselcontent', '', 0),
(44, 1, '2012-11-29 12:21:11', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:21:11', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=44', 0, 'carouselcontent', '', 0),
(45, 1, '2012-11-29 12:21:14', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:21:14', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=45', 0, 'carouselcontent', '', 0),
(46, 1, '2012-11-29 12:27:00', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:27:00', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=46', 0, 'carouselcontent', '', 0),
(47, 1, '2012-11-29 12:27:07', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:27:07', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=47', 0, 'carouselcontent', '', 0),
(48, 1, '2012-11-29 12:27:36', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:27:36', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=48', 0, 'carouselcontent', '', 0),
(49, 1, '2012-11-29 12:29:34', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:29:34', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=49', 0, 'carouselcontent', '', 0),
(50, 1, '2012-11-29 12:30:47', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:30:47', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=50', 0, 'carouselcontent', '', 0),
(51, 1, '2012-11-29 12:32:12', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:32:12', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=51', 0, 'carouselcontent', '', 0),
(52, 1, '2012-11-29 12:32:18', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:32:18', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=52', 0, 'carouselcontent', '', 0),
(53, 1, '2012-11-29 12:32:19', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:32:19', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=53', 0, 'carouselcontent', '', 0),
(54, 1, '2012-11-29 12:32:25', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:32:25', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=54', 0, 'carouselcontent', '', 0),
(55, 1, '2012-11-29 12:32:27', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:32:27', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=55', 0, 'carouselcontent', '', 0),
(56, 1, '2012-11-29 12:33:29', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:33:29', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=56', 0, 'carouselcontent', '', 0),
(57, 1, '2012-11-29 12:34:06', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:34:06', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=57', 0, 'carouselcontent', '', 0),
(58, 1, '2012-11-29 12:34:53', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:34:53', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=58', 0, 'carouselcontent', '', 0),
(59, 1, '2012-11-29 12:34:56', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:34:56', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=59', 0, 'carouselcontent', '', 0),
(60, 1, '2012-11-29 12:34:56', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:34:56', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=60', 0, 'carouselcontent', '', 0),
(61, 1, '2012-11-29 12:34:56', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:34:56', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=61', 0, 'carouselcontent', '', 0),
(62, 1, '2012-11-29 12:35:13', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:35:13', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=62', 0, 'carouselcontent', '', 0),
(63, 1, '2012-11-29 12:35:26', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:35:26', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=63', 0, 'carouselcontent', '', 0),
(64, 1, '2012-11-29 12:37:18', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:37:18', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=64', 0, 'carouselcontent', '', 0),
(65, 1, '2012-11-29 12:37:20', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:37:20', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=65', 0, 'carouselcontent', '', 0),
(66, 1, '2012-11-29 12:37:21', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:37:21', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=66', 0, 'carouselcontent', '', 0),
(67, 1, '2012-11-29 12:38:00', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:38:00', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=67', 0, 'carouselcontent', '', 0),
(68, 1, '2012-11-29 12:38:06', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:38:06', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=68', 0, 'carouselcontent', '', 0),
(69, 1, '2012-11-29 12:39:04', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:39:04', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=69', 0, 'carouselcontent', '', 0),
(70, 1, '2012-11-29 12:41:26', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 12:41:26', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=70', 0, 'carouselcontent', '', 0),
(71, 1, '2012-11-29 13:36:02', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2012-11-29 13:36:02', '0000-00-00 00:00:00', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&p=71', 0, 'carouselcontent', '', 0),
(72, 1, '2012-11-29 16:33:52', '2012-11-29 16:33:52', '', 'New bg', '', 'publish', 'closed', 'closed', '', 'new-bg', '', '', '2012-11-29 16:34:51', '2012-11-29 16:34:51', '', 0, 'http://localhost:8888/wordpress/?post_type=carouselcontent&#038;p=72', 0, 'carouselcontent', '', 0),
(73, 1, '2012-11-29 16:33:43', '2012-11-29 16:33:43', '', 'new', '', 'inherit', 'open', 'open', '', 'new', '', '', '2012-11-29 16:33:43', '2012-11-29 16:33:43', '', 72, 'http://localhost:8888/wordpress/wp-content/uploads/2012/11/new.jpg', 0, 'attachment', 'image/jpeg', 0),
(74, 1, '2012-11-29 16:34:45', '2012-11-29 16:34:45', '', 'new', '', 'inherit', 'open', 'open', '', 'new-2', '', '', '2012-11-29 16:34:45', '2012-11-29 16:34:45', '', 72, 'http://localhost:8888/wordpress/wp-content/uploads/2012/11/new1.jpg', 0, 'attachment', 'image/jpeg', 0),
(75, 1, '2012-11-29 16:35:51', '2012-11-29 16:35:51', '', 'New bg', '', 'inherit', 'open', 'open', '', '72-autosave', '', '', '2012-11-29 16:35:51', '2012-11-29 16:35:51', '', 72, 'http://localhost:8888/wordpress/72-autosave/', 0, 'revision', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_terms`
--
DROP TABLE IF EXISTS `wp_terms`;

CREATE TABLE `wp_terms` (
  `term_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL DEFAULT '',
  `slug` varchar(200) NOT NULL DEFAULT '',
  `term_group` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`term_id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `wp_terms`
--

INSERT INTO `wp_terms` (`term_id`, `name`, `slug`, `term_group`) VALUES
(1, 'Uncategorized', 'uncategorized', 0),
(2, 'Blogroll', 'blogroll', 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_term_relationships`
--
DROP TABLE IF EXISTS `wp_term_relationships`;

CREATE TABLE `wp_term_relationships` (
  `object_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `term_taxonomy_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `term_order` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`object_id`,`term_taxonomy_id`),
  KEY `term_taxonomy_id` (`term_taxonomy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wp_term_relationships`
--

INSERT INTO `wp_term_relationships` (`object_id`, `term_taxonomy_id`, `term_order`) VALUES
(1, 1, 0),
(1, 2, 0),
(2, 2, 0),
(3, 2, 0),
(4, 2, 0),
(5, 1, 0),
(5, 2, 0),
(6, 2, 0),
(7, 2, 0),
(9, 1, 0),
(12, 1, 0),
(16, 1, 0),
(18, 1, 0),
(29, 1, 0),
(32, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_term_taxonomy`
--
DROP TABLE IF EXISTS `wp_term_taxonomy`;

CREATE TABLE `wp_term_taxonomy` (
  `term_taxonomy_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `term_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `taxonomy` varchar(32) NOT NULL DEFAULT '',
  `description` longtext NOT NULL,
  `parent` bigint(20) unsigned NOT NULL DEFAULT '0',
  `count` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`term_taxonomy_id`),
  UNIQUE KEY `term_id_taxonomy` (`term_id`,`taxonomy`),
  KEY `taxonomy` (`taxonomy`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `wp_term_taxonomy`
--

INSERT INTO `wp_term_taxonomy` (`term_taxonomy_id`, `term_id`, `taxonomy`, `description`, `parent`, `count`) VALUES
(1, 1, 'category', '', 0, 3),
(2, 2, 'link_category', '', 0, 7);

-- --------------------------------------------------------

--
-- Table structure for table `wp_usermeta`
--
DROP TABLE IF EXISTS `wp_usermeta`;

CREATE TABLE `wp_usermeta` (
  `umeta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext,
  PRIMARY KEY (`umeta_id`),
  KEY `user_id` (`user_id`),
  KEY `meta_key` (`meta_key`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `wp_usermeta`
--

INSERT INTO `wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES
(1, 1, 'first_name', ''),
(2, 1, 'last_name', ''),
(3, 1, 'nickname', 'admin'),
(4, 1, 'description', ''),
(5, 1, 'rich_editing', 'true'),
(6, 1, 'comment_shortcuts', 'false'),
(7, 1, 'admin_color', 'fresh'),
(8, 1, 'use_ssl', '0'),
(9, 1, 'show_admin_bar_front', 'true'),
(10, 1, 'wp_capabilities', 'a:1:{s:13:"administrator";s:1:"1";}'),
(11, 1, 'wp_user_level', '10'),
(12, 1, 'dismissed_wp_pointers', 'wp330_toolbar,wp330_media_uploader,wp330_saving_widgets,wp340_choose_image_from_library,wp340_customize_current_theme_link'),
(13, 1, 'show_welcome_panel', '1'),
(14, 1, 'wp_dashboard_quick_press_last_post_id', '38'),
(15, 1, 'wp_user-settings', 'mfold=o'),
(16, 1, 'wp_user-settings-time', '1354020668');

-- --------------------------------------------------------

--
-- Table structure for table `wp_users`
--
DROP TABLE IF EXISTS `wp_users`;

CREATE TABLE `wp_users` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_login` varchar(60) NOT NULL DEFAULT '',
  `user_pass` varchar(64) NOT NULL DEFAULT '',
  `user_nicename` varchar(50) NOT NULL DEFAULT '',
  `user_email` varchar(100) NOT NULL DEFAULT '',
  `user_url` varchar(100) NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(60) NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT '0',
  `display_name` varchar(250) NOT NULL DEFAULT '',
  PRIMARY KEY (`ID`),
  KEY `user_login_key` (`user_login`),
  KEY `user_nicename` (`user_nicename`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `wp_users`
--

INSERT INTO `wp_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `display_name`) VALUES
(1, 'admin', '$P$BCUJyW2YDE9kNOzZ6qHMVRNmF.6.fM.', 'admin', 'chris@fueled.com', '', '2012-11-22 09:20:58', '', 0, 'admin');
