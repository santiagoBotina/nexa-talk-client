import {pgTable, serial, text, timestamp, integer, pgEnum, time} from "drizzle-orm/pg-core";

export const weekDaysEnum = pgEnum('week_day', ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']);

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  semester: integer("semester").notNull(),
  degree: text("degree").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const asignatures = pgTable("asignatures", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const teachers = pgTable("teachers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const schedules = pgTable("schedules", {
  id: serial("id").primaryKey(),
  student_id: integer("student_id").notNull().references(() => students.id),
  asignature_id: integer("asignature_id").notNull().references(() => asignatures.id),
  teacher_id: integer("teacher_id").notNull().references(() => teachers.id),
  week_day: weekDaysEnum(),
  start_hour: time("start_hour").notNull(),
  end_hour: time("end_hour").notNull(),
  semester: integer("semester").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});
