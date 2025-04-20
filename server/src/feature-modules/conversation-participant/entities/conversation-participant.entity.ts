import { Conversation } from 'src/feature-modules/conversations/entities/conversation.entity';
import { Message } from 'src/feature-modules/messages/entities/message.entity';
import { User } from 'src/feature-modules/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';

@Entity('conversation_participants')
export class ConversationParticipant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'conversation_id' })
  conversationId: string;

  @Column({ name: 'user_id' })
  userId: string;

  @CreateDateColumn({ name: 'joined_at' })
  joinedAt: Date;

  @Column({ name: 'last_read_message_id', nullable: true })
  lastReadMessageId: string;

  @Column({ name: 'is_admin', default: false })
  isAdmin: boolean;

  @ManyToOne(() => Conversation, conversation => conversation.participants)
  @JoinColumn({ name: 'conversation_id' })
  conversation: Conversation;

  @ManyToOne(() => User, user => user.participations)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Message, { nullable: true })
  @JoinColumn({ name: 'last_read_message_id' })
  lastReadMessage: Message;
}