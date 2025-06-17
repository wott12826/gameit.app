import { useWallet } from '@solana/wallet-adapter-react';
import { useSWR } from 'swr';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { shortenAddress } from '@/lib/utils';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw Error('Failed to fetch data');
  return res.json();
};

export default function MyGames() {
  const { publicKey } = useWallet();
  const currentWalletPublicKey = publicKey?.toString();
  
  const { data: games, error, isLoading, mutate } = useSWR(
    "/api/games?category=all",
    fetcher
  );

  // Фильтруем игры по текущему кошельку
  const filteredGames = games?.filter(game => game.author === currentWalletPublicKey);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <RefreshCw className="h-8 w-8 animate-spin text-emerald-400" />
        <span className="ml-3 text-lg">Loading your games...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-lg text-red-400 mb-4">Failed to load your games.</p>
        <Button
          onClick={() => mutate()}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-pixel"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Retry
        </Button>
      </div>
    );
  }

  if (filteredGames && filteredGames.length !== 0) {
    return (
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-emerald-400 mb-8 font-pixel">
            My Games
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-lg text-zinc-400 mb-4">
        You haven't created any games yet.
      </p>
      <p className="text-zinc-500">Start by generating a new game!</p>
    </div>
  );
}

function GameCard({ game, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
      className="bg-zinc-800/50 backdrop-blur-md rounded-lg overflow-hidden border border-zinc-700/50 hover:border-emerald-500/30 transition-colors"
    >
      <div className="p-4 flex flex-col gap-3">
        <div className="relative">
          <Image
            src={game.image || "/placeholder.svg"}
            width={300}
            height={150}
            alt={game.title}
            className="rounded-md w-full h-32 object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium font-pixel">{game.title}</h3>
          <p className="text-xs text-zinc-400 mt-1">
            by {shortenAddress(game.author)}
          </p>
        </div>
        <Link href={`/play/${game.id}`} passHref>
          <Button
            size="sm"
            className="w-full bg-emerald-600/80 hover:bg-emerald-500 text-white font-pixel transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Play
          </Button>
        </Link>
      </div>
    </motion.div>
  );
} 