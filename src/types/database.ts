export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          image_url: string | null
          parent_id: string | null
          display_order: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          image_url?: string | null
          parent_id?: string | null
          display_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          image_url?: string | null
          parent_id?: string | null
          display_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          price: number
          compare_at_price: number | null
          category_id: string | null
          images: string[]
          variants: Json | null
          stock_quantity: number
          sku: string | null
          is_active: boolean
          is_featured: boolean
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          price: number
          compare_at_price?: number | null
          category_id?: string | null
          images?: string[]
          variants?: Json | null
          stock_quantity?: number
          sku?: string | null
          is_active?: boolean
          is_featured?: boolean
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          price?: number
          compare_at_price?: number | null
          category_id?: string | null
          images?: string[]
          variants?: Json | null
          stock_quantity?: number
          sku?: string | null
          is_active?: boolean
          is_featured?: boolean
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          role: 'customer' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          phone?: string | null
          role?: 'customer' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          phone?: string | null
          role?: 'customer' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      addresses: {
        Row: {
          id: string
          user_id: string
          name: string
          line1: string
          line2: string | null
          city: string
          county: string | null
          postcode: string
          country: string
          is_default: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          line1: string
          line2?: string | null
          city: string
          county?: string | null
          postcode: string
          country?: string
          is_default?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          line1?: string
          line2?: string | null
          city?: string
          county?: string | null
          postcode?: string
          country?: string
          is_default?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string | null
          email: string
          status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          subtotal: number
          shipping_cost: number
          total: number
          shipping_address: Json
          billing_address: Json | null
          stripe_payment_intent_id: string | null
          stripe_checkout_session_id: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          email: string
          status?: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          subtotal: number
          shipping_cost?: number
          total: number
          shipping_address: Json
          billing_address?: Json | null
          stripe_payment_intent_id?: string | null
          stripe_checkout_session_id?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          email?: string
          status?: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          subtotal?: number
          shipping_cost?: number
          total?: number
          shipping_address?: Json
          billing_address?: Json | null
          stripe_payment_intent_id?: string | null
          stripe_checkout_session_id?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          product_name: string
          product_image: string | null
          variant: Json | null
          quantity: number
          unit_price: number
          total_price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          product_name: string
          product_image?: string | null
          variant?: Json | null
          quantity: number
          unit_price: number
          total_price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          product_name?: string
          product_image?: string | null
          variant?: Json | null
          quantity?: number
          unit_price?: number
          total_price?: number
          created_at?: string
        }
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
  }
}

export type Category = Database['public']['Tables']['categories']['Row']
export type Product = Database['public']['Tables']['products']['Row']
export type User = Database['public']['Tables']['users']['Row']
export type Address = Database['public']['Tables']['addresses']['Row']
export type Order = Database['public']['Tables']['orders']['Row']
export type OrderItem = Database['public']['Tables']['order_items']['Row']
