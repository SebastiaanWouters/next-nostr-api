-- CreateTable
CREATE TABLE "BookMark" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "summary" TEXT,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "BookMark_pkey" PRIMARY KEY ("id")
);
