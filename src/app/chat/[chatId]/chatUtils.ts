import { db } from '@/lib/db';
import { chats } from '@/lib/db/schema';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { uid } from '../../../../components/SignUp';

export async function getChatsData(chatId: string) {
    // const { uid } = await auth();
    if (!uid) {
        redirect('/sign-in');
    }

    const _chats = await db.select().from(chats).where(eq(chats.userId, uid));

    if (!_chats) {
        redirect('/');
    }

    if (!_chats.find((chat) => chat.id === parseInt(chatId))) {
        redirect('/');
    }

    console.log(_chats);
    return _chats;

}