import { AiConversation } from 'src/feature-modules/ai-conversations/entities/ai-conversation.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';

@Entity('ai_messages')
export class AiMessage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'ai_conversation_id' })
  aiConversationId: string;

  @Column()
  content: string;

  @Column({ name: 'is_from_ai' })
  isFromAi: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => AiConversation, aiConversation => aiConversation.aiMessages)
  @JoinColumn({ name: 'ai_conversation_id' })
  aiConversation: AiConversation;
}