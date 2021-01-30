/*
  Warnings:

  - You are about to drop the column `country` on the `address` table. All the data in the column will be lost.
  - Added the required column `userId` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `address` DROP COLUMN `country`,
    ADD COLUMN     `userId` INT NOT NULL;

-- AddForeignKey
ALTER TABLE `address` ADD FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
