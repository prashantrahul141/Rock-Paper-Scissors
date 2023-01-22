import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { prisma } from 'src/server/db';

export const mainRouter = createTRPCRouter({
  createRoom: publicProcedure.mutation(async () => {
    const room = await prisma.room.create({ data: {} });
    const user = await prisma.user.create({
      data: {
        Wins: 0,
        joinedRoomId: room.roomId,
      },
    });
    return { room, user };
  }),

  joinRoom: publicProcedure
    .input(z.object({ roomId: z.string() }))
    .mutation(() => {
      return {};
    }),
});
