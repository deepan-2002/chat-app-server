import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './feature-modules/users/users.module';
import { ConversationsModule } from './feature-modules/conversations/conversations.module';
import { ConversationParticipantModule } from './feature-modules/conversation-participant/conversation-participant.module';
import { MessagesModule } from './feature-modules/messages/messages.module';
import { AiConversationsModule } from './feature-modules/ai-conversations/ai-conversations.module';
import { AiMessagesModule } from './feature-modules/ai-messages/ai-messages.module';
import { UserKeysModule } from './feature-modules/user-keys/user-keys.module';
import { AuthModule } from './feature-modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './feature-modules/auth/guard/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: process.env.NODE_ENV !== 'production',
      })
    }),
    UsersModule,
    ConversationsModule,
    ConversationParticipantModule,
    MessagesModule,
    AiConversationsModule,
    AiMessagesModule,
    UserKeysModule,
    AuthModule,],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AppModule { }