import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from 'src/feature-modules/users/entities/user.entity';
import { AiMessage } from 'src/feature-modules/ai-messages/entities/ai-message.entity';

@Entity('ai_conversations')
export class AiConversation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ nullable: true })
  context: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ length: 255, nullable: true })
  title: string;

  @ManyToOne(() => User, user => user.aiConversations)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => AiMessage, aiMessage => aiMessage.aiConversation)
  aiMessages: AiMessage[];
}