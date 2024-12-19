export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
	public: {
		Tables: {
			T_Profile: {
				Row: {
					created_at: string;
					name: string;
					user_id: string;
				};
				Insert: {
					created_at?: string;
					name: string;
					user_id?: string;
				};
				Update: {
					created_at?: string;
					name?: string;
					user_id?: string;
				};
				Relationships: [];
			};
			T_Reward: {
				Row: {
					amount: number | null;
					created_at: string;
					cycle_index: number;
					description: string | null;
					equipment: Database['public']['Enums']['E_Equipment'] | null;
					id: string;
					item: Database['public']['Enums']['E_Item'] | null;
					profile_name: string | null;
					rarety: Database['public']['Enums']['E_Rarety'] | null;
					type: Database['public']['Enums']['E_Reward'];
					user_id: string;
				};
				Insert: {
					amount?: number | null;
					created_at?: string;
					cycle_index: number;
					description?: string | null;
					equipment?: Database['public']['Enums']['E_Equipment'] | null;
					id?: string;
					item?: Database['public']['Enums']['E_Item'] | null;
					profile_name?: string | null;
					rarety?: Database['public']['Enums']['E_Rarety'] | null;
					type: Database['public']['Enums']['E_Reward'];
					user_id?: string;
				};
				Update: {
					amount?: number | null;
					created_at?: string;
					cycle_index?: number;
					description?: string | null;
					equipment?: Database['public']['Enums']['E_Equipment'] | null;
					id?: string;
					item?: Database['public']['Enums']['E_Item'] | null;
					profile_name?: string | null;
					rarety?: Database['public']['Enums']['E_Rarety'] | null;
					type?: Database['public']['Enums']['E_Reward'];
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'T_Reward_profile_name_user_id_fkey';
						columns: ['profile_name', 'user_id'];
						isOneToOne: false;
						referencedRelation: 'T_Profile';
						referencedColumns: ['name', 'user_id'];
					}
				];
			};
		};
		Views: {
			V_Rewards_Per_Day: {
				Row: {
					count: number | null;
					day: string | null;
				};
				Relationships: [];
			};
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			E_Equipment: 'COMPANIONS' | 'SPELLS' | 'EQUIPMENTS';
			E_Item: 'RING' | 'ARMBAND' | 'COMPANION';
			E_Rarety: 'COMMON' | 'RARE' | 'KROSMIC' | 'INFINITE';
			E_Reward: 'GEMS' | 'KAMAS' | 'EQUIPMENT' | 'CHEST' | 'WAKFU' | 'RUNES' | 'COMPANION';
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
	PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views']) | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
				Database[PublicTableNameOrOptions['schema']]['Views'])
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
			Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
		? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema['Tables']
		? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema['Tables']
		? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
		: never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
		? PublicSchema['Enums'][PublicEnumNameOrOptions]
		: never;

export type CompositeTypes<
	PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes'] | { schema: keyof Database },
	CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
		: never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
	? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
	: PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
		? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
		: never;
