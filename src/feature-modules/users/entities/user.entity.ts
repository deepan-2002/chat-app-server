import { AiConversation } from 'src/feature-modules/ai-conversations/entities/ai-conversation.entity';
import { ConversationParticipant } from 'src/feature-modules/conversation-participant/entities/conversation-participant.entity';
import { Message } from 'src/feature-modules/messages/entities/message.entity';
import { UserKey } from 'src/feature-modules/user-keys/entities/user-key.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 50, unique: true })
    username: string;

    @Column({ length: 255, unique: true })
    email: string;

    @Column({ name: 'password_hash', length: 255 })
    passwordHash: string;

    @Column({ name: 'public_key', nullable: true })
    publicKey: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column({ name: 'last_seen_at', nullable: true })
    lastSeenAt: Date;

    @Column({ name: 'avatar_url', nullable: true })
    avatarUrl: string;

    @Column({ name: 'is_online', default: false })
    isOnline: boolean;

    @OneToMany(() => ConversationParticipant, participant => participant.user)
    participations: ConversationParticipant[];

    @OneToMany(() => Message, message => message.sender)
    messages: Message[];

    @OneToMany(() => AiConversation, aiConversation => aiConversation.user)
    aiConversations: AiConversation[];

    @OneToMany(() => UserKey, userKey => userKey.user)
    userKeys: UserKey[];

    @BeforeInsert()
    async hashPassword() {
        if (this.passwordHash) {
            const saltRounds = 12;
            this.passwordHash = await bcrypt.hash(this.passwordHash, saltRounds);
        }
    }
}