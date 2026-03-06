import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Play, Users, Gamepad2, Twitch, Youtube, Twitter, DiscIcon as Discord, ChevronRight } from "lucide-react";

import heroBg from "@/assets/images/hero-bg.png";
import gamerProfile from "@/assets/images/gamer-profile.png";
import gameFps from "@/assets/images/game-fps.png";
import gameBr from "@/assets/images/game-br.png";
import gameRpg from "@/assets/images/game-rpg.png";
import video1 from "@/assets/images/video-1.png";
import video2 from "@/assets/images/video-2.png";
import video3 from "@/assets/images/video-3.png";

const GAMER_NAME = "NEXUS";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm md:text-base font-semibold text-primary uppercase tracking-wider">Live Now on Twitch</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 font-display neon-text-primary tracking-tighter"
          >
            LEVEL UP WITH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {GAMER_NAME}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl font-medium"
          >
            Top-tier gameplay, epic highlights, and the most toxic-free gaming community on the internet.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 px-8 rounded-none skew-x-[-10deg] neon-glow-primary transition-all duration-300 hover:scale-105"
            >
              <div className="skew-x-[10deg] flex items-center gap-2">
                <Play className="w-5 h-5 fill-current" /> WATCH VIDEOS
              </div>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary/50 hover:bg-secondary/20 text-secondary-foreground font-bold text-lg h-14 px-8 rounded-none skew-x-[-10deg] transition-all duration-300 hover:scale-105"
            >
              <div className="skew-x-[10deg] flex items-center gap-2">
                <Users className="w-5 h-5" /> JOIN SQUAD
              </div>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full" />
              <div className="aspect-square relative rounded-2xl overflow-hidden border-2 border-primary/30 neon-glow-primary">
                <img 
                  src={gamerProfile} 
                  alt={`${GAMER_NAME} Profile`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
                MEET THE <span className="text-primary">LEGEND</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                What started as a casual hobby turned into a full-blown obsession. I'm {GAMER_NAME}, a competitive player and content creator dedicated to pushing the limits of what's possible in gaming.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether I'm clutching a 1v4 in my favorite shooter or exploring massive open worlds, I bring high energy, tactical gameplay, and good vibes to every stream.
              </p>
              
              <div className="pt-6 flex justify-center lg:justify-start gap-4">
                <div className="glass-card p-4 flex-1 max-w-[160px] text-center border-l-4 border-l-primary">
                  <h3 className="text-3xl font-black font-display text-white">1.2M</h3>
                  <p className="text-sm text-primary uppercase font-bold tracking-wider">Subscribers</p>
                </div>
                <div className="glass-card p-4 flex-1 max-w-[160px] text-center border-l-4 border-l-secondary">
                  <h3 className="text-3xl font-black font-display text-white">5K+</h3>
                  <p className="text-sm text-secondary uppercase font-bold tracking-wider">Hours Streamed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED GAMES SECTION */}
      <section className="py-24 relative bg-card/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-4">
              MAIN <span className="text-secondary neon-text-secondary">ARENAS</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The battlegrounds where I spend most of my time dominating and creating content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "TACTICAL FPS", desc: "Clutch moments and pixel-perfect aim.", img: gameFps, color: "group-hover:border-primary" },
              { title: "BATTLE ROYALE", desc: "Surviving the chaos and taking the crown.", img: gameBr, color: "group-hover:border-accent" },
              { title: "ACTION RPG", desc: "Epic quests, boss fights, and min-maxing.", img: gameRpg, color: "group-hover:border-secondary" }
            ].map((game, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className={`glass-card overflow-hidden transition-all duration-500 border-2 border-transparent ${game.color} hover:-translate-y-2`}>
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
                    <img 
                      src={game.img} 
                      alt={game.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <Gamepad2 className="w-8 h-8 text-white opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all" />
                    </div>
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-2xl font-bold font-display mb-2 text-white group-hover:text-primary transition-colors">{game.title}</h3>
                    <p className="text-muted-foreground">{game.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST VIDEOS SECTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-4">
                RECENT <span className="text-primary neon-text-primary">DROPS</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Check out the latest highlights, full gameplays, and stream VODs.
              </p>
            </div>
            <Button variant="ghost" className="hover:text-primary group">
              VIEW ALL <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "THE MOST INSANE 1V5 CLUTCH!", views: "142K", time: "2 days ago", img: video1 },
              { title: "NEW SEASON UPDATE REVIEW", views: "89K", time: "4 days ago", img: video2 },
              { title: "ROAD TO MAX RANK - EP 12", views: "210K", time: "1 week ago", img: video3 }
            ].map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-4">
                  <img 
                    src={video.img} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.5)]">
                      <Play className="w-8 h-8 text-black fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 text-xs font-bold rounded backdrop-blur">
                    14:20
                  </div>
                </div>
                <h3 className="text-xl font-bold font-display leading-tight mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground space-x-3">
                  <span>{video.views} views</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span>{video.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN SQUAD SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glass-card max-w-4xl mx-auto p-8 md:p-16 rounded-3xl border-primary/20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SQUAD</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get notified when I go live, enter exclusive giveaways, and connect with other gamers in our Discord.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="ENTER YOUR EMAIL..." 
                className="h-14 bg-black/50 border-white/10 text-white placeholder:text-white/40 rounded-none focus-visible:ring-primary font-display tracking-widest text-lg"
              />
              <Button type="submit" size="lg" className="h-14 rounded-none bg-primary hover:bg-primary/90 text-black font-bold px-8 skew-x-[-10deg] neon-glow-primary">
                <div className="skew-x-[10deg]">SUBSCRIBE</div>
              </Button>
            </form>
            
            <div className="mt-12 pt-12 border-t border-white/10 flex flex-col items-center">
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-6">Or join directly</p>
              <Button variant="outline" size="lg" className="h-14 rounded-none border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all duration-300 w-full max-w-xs group">
                <Discord className="w-6 h-6 mr-3 group-hover:animate-bounce" /> JOIN DISCORD SERVER
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 bg-black/50 relative z-10">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black font-display tracking-tighter">
            NEXUS<span className="text-primary">.GG</span>
          </div>
          
          <div className="flex gap-4">
            {[
              { icon: <Youtube className="w-5 h-5" />, color: "hover:bg-[#FF0000] hover:border-[#FF0000]" },
              { icon: <Twitch className="w-5 h-5" />, color: "hover:bg-[#9146FF] hover:border-[#9146FF]" },
              { icon: <Twitter className="w-5 h-5" />, color: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]" },
              { icon: <Discord className="w-5 h-5" />, color: "hover:bg-[#5865F2] hover:border-[#5865F2]" }
            ].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {GAMER_NAME} Gaming. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
