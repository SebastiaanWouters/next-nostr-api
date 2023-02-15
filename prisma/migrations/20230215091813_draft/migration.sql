-- CreateTable
CREATE TABLE "Draft" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "summary" TEXT,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "Draft_pkey" PRIMARY KEY ("id")
);
