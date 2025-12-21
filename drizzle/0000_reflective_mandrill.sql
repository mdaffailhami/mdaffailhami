CREATE TABLE "experiences" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company" text NOT NULL,
	"role" text NOT NULL,
	"start" timestamp NOT NULL,
	"end" timestamp,
	"description" text NOT NULL,
	"images" jsonb NOT NULL,
	"links" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"images" jsonb NOT NULL,
	"links" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects_techs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"tech_id" uuid NOT NULL,
	CONSTRAINT "projects_techs_project_id_tech_id_unique" UNIQUE("project_id","tech_id")
);
--> statement-breakpoint
CREATE TABLE "techs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"label" text NOT NULL,
	"url" text NOT NULL,
	"icon" jsonb NOT NULL,
	CONSTRAINT "techs_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "projects_techs" ADD CONSTRAINT "projects_techs_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_techs" ADD CONSTRAINT "projects_techs_tech_id_techs_id_fk" FOREIGN KEY ("tech_id") REFERENCES "public"."techs"("id") ON DELETE cascade ON UPDATE no action;