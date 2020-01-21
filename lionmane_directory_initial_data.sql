INSERT INTO `contacts` (`first_name`, `last_name`, `nickname`, `birthday`, `gender`, `created_at`, `updated_at`) 
	VALUES ('Edson', 'Lemus', 'edsonnlb', '1986-03-24', 0, CURRENT_TIME, CURRENT_TIME);
SET @inserted_id = LAST_INSERT_ID();
INSERT INTO `phones` (`contact_id`, `phone_number`, `category`) 
	VALUES (@inserted_id, '502+56807166', 0);
INSERT INTO `phones` (`contact_id`, `phone_number`, `category`) 
	VALUES (@inserted_id, '502+66272687', 1);
	
INSERT INTO `contacts` (`first_name`, `last_name`, `nickname`, `birthday`, `gender`, `created_at`, `updated_at`) 
	VALUES ('Bruce', 'Wayne', 'batman', '1939-05-27', 0, CURRENT_TIME, CURRENT_TIME);
SET @inserted_id = LAST_INSERT_ID();
INSERT INTO `phones` (`contact_id`, `phone_number`, `category`) 
	VALUES (@inserted_id, '123-456-7890', 1);
	
INSERT INTO `contacts` (`first_name`, `last_name`, `nickname`, `birthday`, `gender`, `created_at`, `updated_at`) 
	VALUES ('Selina', 'Kyle', 'catwoman', '1999-05-25', 1, CURRENT_TIME, CURRENT_TIME);
SET @inserted_id = LAST_INSERT_ID();
INSERT INTO `phones` (`contact_id`, `phone_number`, `category`) 
	VALUES (@inserted_id, '321-654-0982', 0);
INSERT INTO `phones` (`contact_id`, `phone_number`, `category`) 
	VALUES (@inserted_id, '321-654-0987', 3);
	
INSERT INTO `contacts` (`first_name`, `last_name`, `nickname`, `birthday`, `gender`, `created_at`, `updated_at`) 
	VALUES ('Johnathan', 'Wick', 'johnwick', '1964-09-02', 0, CURRENT_TIME, CURRENT_TIME);
SET @inserted_id = LAST_INSERT_ID();
INSERT INTO `phones` (`contact_id`, `phone_number`, `category`) 
	VALUES (@inserted_id, '337-583-2852', 2);
	
INSERT INTO `contacts` (`first_name`, `last_name`, `nickname`, `birthday`, `gender`, `created_at`, `updated_at`) 
	VALUES ('Thomas', 'Anderson', 'Neo', '1962-03-11', 0, CURRENT_TIME, CURRENT_TIME);
SET @inserted_id = LAST_INSERT_ID();
INSERT INTO `phones` (`contact_id`, `phone_number`, `category`) 
	VALUES (@inserted_id, '123-456-7890', 0);
	
INSERT INTO `contacts` (`first_name`, `last_name`, `nickname`, `birthday`, `gender`, `created_at`, `updated_at`) 
	VALUES ('Trinity', 'Unknown', 'Trinity', '1962-08-21', 1, CURRENT_TIME, CURRENT_TIME);
SET @inserted_id = LAST_INSERT_ID();
INSERT INTO `phones` (`contact_id`, `phone_number`, `category`) 
	VALUES (@inserted_id, '321-654-0987', 0);