CREATE TABLE "favorite_techs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tech_id" uuid NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "socials" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"label" text NOT NULL,
	"url" text NOT NULL,
	"icon" jsonb NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "techs" DROP CONSTRAINT "techs_slug_unique";--> statement-breakpoint
ALTER TABLE "favorite_techs" ADD CONSTRAINT "favorite_techs_tech_id_techs_id_fk" FOREIGN KEY ("tech_id") REFERENCES "public"."techs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "techs" DROP COLUMN "slug";