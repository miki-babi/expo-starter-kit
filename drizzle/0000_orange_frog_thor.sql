CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`age` integer,
	`sex` text,
	`guest_id` text,
	`server_id` text,
	`phone` text,
	`email` text,
	`password` text,
	`is_guest` integer DEFAULT true,
	`uuid` text,
	`avatar` text,
	`created_at` text,
	`updated_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_guest_id_unique` ON `users_table` (`guest_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_email_unique` ON `users_table` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_uuid_unique` ON `users_table` (`uuid`);