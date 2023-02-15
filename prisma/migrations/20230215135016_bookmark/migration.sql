/*
  Warnings:

  - You are about to drop the `BookMark` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BookMark";

-- CreateTable
CREATE TABLE "Bookmark" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "summary" TEXT,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);
