import { User } from 'src/feature-modules/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';

@Entity('user_keys')
export class UserKey {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'device_id' })
  deviceId: string;

  @Column({ name: 'public_key' })
  publicKey: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'last_active_at', default: () => 'CURRENT_TIMESTAMP' })
  lastActiveAt: Date;

  @ManyToOne(() => User, user => user.userKeys)
  @JoinColumn({ name: 'user_id' })
  user: User;
}