// Mirrors supabase/migrations/0001_create_leads_schema.sql. Replace with the
// output of `mcp__supabase__generate_typescript_types` once the migration is
// applied to a real project.

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      leads: {
        Row: {
          budget_hint: string
          city: string | null
          created_at: string
          email: string | null
          id: number
          message: string | null
          name: string
          phone: string
          space_type: string
          status: string
          updated_at: string
        }
        Insert: {
          budget_hint?: string
          city?: string | null
          created_at?: string
          email?: string | null
          id?: never
          message?: string | null
          name: string
          phone: string
          space_type: string
          status?: string
          updated_at?: string
        }
        Update: {
          budget_hint?: string
          city?: string | null
          created_at?: string
          email?: string | null
          id?: never
          message?: string | null
          name?: string
          phone?: string
          space_type?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      staff_members: {
        Row: {
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: never
          user_id: string
        }
        Update: {
          created_at?: string
          id?: never
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database["public"]

export type Tables<TableName extends keyof PublicSchema["Tables"]> =
  PublicSchema["Tables"][TableName]["Row"]
export type TablesInsert<TableName extends keyof PublicSchema["Tables"]> =
  PublicSchema["Tables"][TableName]["Insert"]
export type TablesUpdate<TableName extends keyof PublicSchema["Tables"]> =
  PublicSchema["Tables"][TableName]["Update"]
