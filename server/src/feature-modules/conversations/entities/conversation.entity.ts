import { ConversationParticipant } from 'src/feature-modules/conversation-participant/entities/conversation-participant.entity';
import { Message } from 'src/feature-modules/messages/entities/message.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('conversations')
export class Conversation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: true })
  name: string;

  @Column({ name: 'is_group', default: false })
  isGroup: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'last_message_at', default: () => 'CURRENT_TIMESTAMP' })
  lastMessageAt: Date;

  @OneToMany(() => ConversationParticipant, participant => participant.conversation)
  participants: ConversationParticipant[];

  @OneToMany(() => Message, message => message.conversation)
  messages: Message[];
}