"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const albuns = [
  {
    titulo: "The Slow Rush",
    artista: "Tame Impala",
    ano: 2020,
    capa: "/albums/the-slow-rush.jpg",
    spotify: "https://open.spotify.com/album/31qVWUdRrlb8thMvts0yYL?si=B1csn78ZRGGR2iT2E4ARIA",
  },
  {
    titulo: "Igor",
    artista: "Tyler, The Creator",
    ano: 2019,
    capa: "/albums/igor.jpg",
    spotify: "https://open.spotify.com/album/5zi7WsKlIiUXv09tbGLKsE?si=qx05YgvASVCx5J4Oxjmnjg",
  },
  {
    titulo: "Blonde",
    artista: "Frank Ocean",
    ano: 2016,
    capa: "/albums/blond.jpg",
    spotify: "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf?si=oU3jGf8iSmuvwYoCjgQcSA",
  },
  {
    titulo: "The New Abnormal",
    artista: "The Strokes",
    ano: 2020,
    capa: "/albums/The-New-Abnormal.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/2xkZV2Hl1Omi8rk2D7t5lN?si=338116cda7a84d86",
  },
  {
    titulo: "Is This It",
    artista: "The Strokes",
    ano: 2001,
    capa: "/albums/is-this-it.jpg",
    spotify: "https://open.spotify.com/intl-pt/track/2pAD0PKMUMtxlMvz33tYzB?si=1b17ac48560e43da",
  },
  {
    titulo: "The Dark Side of the Moon",
    artista: "Pink Floyd",
    ano: 1973,
    capa: "/albums/Dark-side-of-the-moon.png",
    spotify: "https://open.spotify.com/intl-pt/album/4LH4d3cOWNNsVw41Gqt2kv?si=4a38e2feecf24367",
  },
  {
    titulo: "Wish You Were Here",
    artista: "Pink Floyd",
    ano: 1975,
    capa: "/albums/wish-you-were-here.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/0bCAjiUamIFqKJsekOYuRw?si=c021cd3311304541",
  },
  {
    titulo: "Plastic Beach",
    artista: "Gorillaz",
    ano: 2010,
    capa: "/albums/plastic-beach.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/2dIGnmEIy1WZIcZCFSj6i8?si=0906bf2a6bfe4984",
  },
  {
    titulo: "SOS",
    artista: "SZA",
    ano: 2022,
    capa: "/albums/sos.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/07w0rG5TETcyihsEIZR3qG?si=c24ed30d2aa34960",
  },
  {
    titulo: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
    artista: "David Bowie",
    ano: 1972,
    capa: "/albums/Ziggy_Stardust.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/48D1hRORqJq52qsnUYZX56?si=6363beee026a4526",
  },
  {
    titulo: "Debí Tirar Más Fotos",
    artista: "Bad Bunny",
    ano: 2025,
    capa: "/albums/dtmf.png",
    spotify: "https://open.spotify.com/intl-pt/album/5K79FLRUCSysQnVESLcTdb?si=e9ea335b186b46fb",
  },
  {
    titulo: "Essex Honey",
    artista: "Blood Orange",
    ano: 2024,
    capa: "/albums/essex honey.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/5RUma3H9uzDLXxwT7JzTel?si=de9df017d5de4123",
  },
  {
    titulo: "Channel Orange",
    artista: "Frank Ocean",
    ano: 2012,
    capa: "/albums/Channel-orange.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/392p3shh2jkxUxY2VHvlH8?si=8ecb0a3f12e9415e",
  },
  {
    titulo: "Freudian",
    artista: "Daniel Caesar",
    ano: 2017,
    capa: "public/albums/Freudian.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/4E1XUBMTpLO7GpBzUo65Jp?si=d1f012d3b5134a61",
  },
  {
    titulo: "A Seat at the Table",
    artista: "Solange",
    ano: 2016,
    capa: "/albums/a-seat-on-the-table.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/3Yko2SxDk4hc6fncIBQlcM?si=2db30f1dcaca4e12",
  },
  {
    titulo: "Love Deluxe",
    artista: "Sade",
    ano: 1992,
    capa: "/albums/love-deluxe.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/2PfGKHtqEX58bHtkQxJnWG?si=3ed846667d8149a0",
  },
  {
    titulo: "Currents",
    artista: "Tame Impala",
    ano: 2015,
    capa: "/albums/currents.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/79dL7FLiJFOO0EoehUHQBv?si=b5d47bc316204b12",
  },
  {
    titulo: "Alligator Bites Never Heal",
    artista: "Doechii",
    ano: 2024,
    capa: "/albums/alligator-bites-never-heal.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/60UzB8mOCMpc7xkuJE6Bwc?si=7c6448a1a17b4fda",
  },
  {
    titulo: "Lux",
    artista: "Rosalia",
    ano: 2025,
    capa: "/albums/lux.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/3SUEJULSGgBDG1j4GQhfYY?si=de6a5ce8211e4098",
  },
  {
    titulo: "DAMN.",
    artista: "Kendrick Lamar",
    ano: 2017,
    capa: "/albums/damn.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/4eLPsYPBmXABThSJ821sqY?si=24yuKsEaRMKCvjVRgU8cEg",
  },
  {
    titulo: "Call Me If You Get Lost",
    artista: "Tyler, The Creator",
    ano: 2021,
    capa: "/albums/call-me-if-you-get-lost.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/45ba6QAtNrdv6Ke4MFOKk9?si=605e655fa5284fbe",
  },
  {
    titulo: "Good Kid, M.A.A.D City",
    artista: "Kendrick Lamar",
    ano: 2012,
    capa: "/albums/good-kid-maad-city.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/0Oq3mWfexhsjUh0aNNBB5u?si=ba7e34dde7884f92",
  },
  {
    titulo: "Mr. Morale & The Big Steppers",
    artista: "Kendrick Lamar",
    ano: 2022,
    capa: "/albums/mr-morale-the-big-steppers.png",
    spotify: "https://open.spotify.com/intl-pt/album/79ONNoS4M9tfIA1mYLBYVX?si=d48b85f93cd44410",
  },
  {
    titulo: "Promise",
    artista: "Sade",
    ano: 1985,
    capa: "/albums/promise.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/4wCvCNsMJJvyeX5mGO40ae?si=65d7ee45b90649dd",
  },
  {
    titulo: "Take Me to Your Leader",
    artista: "King Geedorah",
    ano: 2003,
    capa: "/albums/Take-me-to-your-leader.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/1mrhahrlJu5JfzgeV6Cy8t?si=3321c32ee2444dd8",
  },
  {
    titulo: "In Rainbows",
    artista: "Radiohead",
    ano: 2007,
    capa: "/albums/In-rainbows.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/5vkqYmiPBYLaalcmjujWxK?si=39c6988706ac4c0e",
  },
  {
    titulo: "Lemonade",
    artista: "Beyoncé",
    ano: 2016,
    capa: "/albums/Lemonade.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/7dK54iZuOxXFarGhXwEXfF?si=35b64b9a592b4fd6",
  },
  {
    titulo: "Ctrl",
    artista: "SZA",
    ano: 2017,
    capa: "/albums/Ctrl.png",
    spotify: "https://open.spotify.com/intl-pt/album/76290XdXVF9rPzGdNRWdCh?si=7b541d295f924c86",
  },
  {
    titulo: "Demon Days",
    artista: "Gorillaz",
    ano: 2005,
    capa: "/albums/demon-days.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/0bUTHlWbkSQysoM3VsWldT?si=95e7b93d9b0a4085",
  },
  {
    titulo: "Never for Ever",
    artista: "Kate Bush",
    ano: 1980,
    capa: "/albums/never-for-ever.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/4MYtX4Kta7FL4NVUE0FYws?si=01466a4aa1f24ad8",
  },
  {
    titulo: "Who Really Cares",
    artista: "TV Girl",
    ano: 2016,
    capa: "/albums/who-really-cares.png",
    spotify: "https://open.spotify.com/intl-pt/album/4oL7pMxnb04uuRI7ReXmuh?si=1ba27df556ed44c7",
  },
  {
    titulo: "Eu Tenho a Senha",
    artista: "João Gomes",
    ano: 2022,
    capa: "/albums/eu-tenho-a-senha.jpg",
    spotify: "https://open.spotify.com/intl-pt/track/4xuxSHR0e0JVTQeOmevluS?si=be1d15f85659471c",
  },
  {
    titulo: "Me Chama de Gato Que Eu Sou Sua",
    artista: "Ana Frango Elétrico",
    ano: 2023,
    capa: "/albums/me-chama-de-gato-que-eu-sou-sua.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/5knMWspCsX6xJYN6hp1nYT?si=822241e7f64049d4",
  },
  {
    titulo: "Jamie",
    artista: "Montell Fish",
    ano: 2022,
    capa: "/albums/Jamie.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/4StdgB0YaIYLGhhXBLuoWl?si=446f779e4d954a30",
  },
  {
    titulo: "Wolf",
    artista: "Tyler The Creator",
    ano: 2013,
    capa: "/albums/Wolf.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/40QTqOBBxCEIQlLNdSjFQB?si=b574c30429f54e28",
  },
  {
    titulo: "This Old Dog",
    artista: "Mac DeMarco",
    ano: 2017,
    capa: "/albums/this-old-dog.jpg",
    spotify: "https://open.spotify.com/intl-pt/track/2RwOqicYzwMSuzKzHx78jm?si=01d5a36ddf0f4c24",
  },
  {
    titulo: "Motomami",
    artista: "Rosalia",
    ano: 2022,
    capa: "/albums/motomami.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/6jbtHi5R0jMXoliU2OS0lo?si=ac1439865e224832",
  },
  {
    titulo: "Dont Tap The Glass",
    artista: "Tyler, The Creator",
    ano: 2025,
    capa: "/albums/dont-tap-the-glass.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/1jzv3jwZbt8lYfEtMjiD1R?si=nk5oHKVeTAWP94YLhy6qpw",
  },
  {
    titulo: "Ok Computer",
    artista: "Radiohead",
    ano: 2019,
    capa: "/albums/ok-computer.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/6dVIqQ8qmQ5GBnJ9shOYGE?si=23ca844f5ca24bd2",
  },
  {
    titulo: "Never Enough",
    artista: "Daniel Caesar",
    ano: 2023,
    capa: "/albums/never-enough.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/7ivbFszr1TbVadj89BIy1y?si=002a711164f943be",
  },
  {
    titulo: "Son of Spergy",
    artista: "Daniel Caesar",
    ano: 2025,
    capa: "/albums/son-of-spergy.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/2LKW0m9cC63QzEI9tJH3ql?si=115218f2bdd44931",
  },
  {
    titulo: "Nectar",
    artista: "Joji",
    ano: 2019,
    capa: "/albums/nectar.jpg",
    spotify: "https://open.spotify.com/intl-pt/album/4kZPZyHSLlYQvM9h8uXb7r?si=0c1e5a9fbbd04c8b",
  },
];

export default function AlbunsPage() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollLock = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.changedTouches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndY.current = e.changedTouches[0].clientY;

    if (touchStartY.current === null || touchEndY.current === null) return;
    if (isDetailOpen) return;

    const distance = touchStartY.current - touchEndY.current;
    const threshold = 30;

    if (distance > threshold) {
      setActiveIndex((prev) => Math.min(prev + 1, albuns.length - 1));
    } else if (distance < -threshold) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    touchStartY.current = null;
    touchEndY.current = null;
  };

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const handleChange = () => {
      setIsMobile(media.matches);
    };

    handleChange();
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isDetailOpen) return;
      if (scrollLock.current) return;

      scrollLock.current = true;

      if (e.deltaY > 0) {
        setActiveIndex((prev) => Math.min(prev + 1, albuns.length - 1));
      } else if (e.deltaY < 0) {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        scrollLock.current = false;
      }, 220);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isDetailOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setIsDetailOpen(true);
      }

      if (e.key === "Escape") {
        setIsDetailOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const albumCentral = albuns[activeIndex];

  return (
    <main className="w-full min-h-screen flex items-center justify-center overflow-hidden">
      {!isMobile && (
        <div className="absolute bottom-6 left-6 text-xs opacity-50 max-w-[200px] leading-relaxed">
          <p>
            Uma recomendação pessoal de discos. Navegue horizontalmente, rolando
            o mouse. Clique em um álbum para expandir. Clique no álbum expandido
            para seguir para o Spotify, ou clique ESC para fechar o modo
            expandido.
          </p>
        </div>
      )}

      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 md:px-6">
        <div className="absolute left-6 top-6 z-30 md:left-8 md:top-8">
          <div className="relative h-14 w-14">
            <Image
              src="/albums/logo.jpg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {!isDetailOpen && (
          <div
            className={
              isMobile
                ? "absolute right-4 top-1/2 z-30 -translate-y-1/2"
                : "absolute top-10 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center"
            }
          >
            {isMobile ? (
              <div className="text-4xl leading-none">◀</div>
            ) : (
              <>
                <div className="text-4xl leading-none">▼</div>
                <span className="mt-2 text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                  selecionado
                </span>
              </>
            )}
          </div>
        )}

        <section className="flex w-full flex-col items-center justify-center">
          <div
            className={`relative transition-all duration-300 ${isDetailOpen ? "blur-md" : "blur-0"
              } ${isMobile ? "h-[72vh] w-full touch-none" : "h-[340px] w-screen"}`}
            onTouchStart={isMobile ? handleTouchStart : undefined}
            onTouchEnd={isMobile ? handleTouchEnd : undefined}
          >
            {albuns.map((album, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;

              const scale = isMobile
                ? Math.max(0.82, 1 - Math.abs(offset) * 0.05)
                : Math.max(0.7, 1 - Math.abs(offset) * 0.05);

              const transform = isMobile
                ? `translate(-50%, calc(-50% + ${offset * 58}px)) scale(${scale})`
                : `translateX(calc(-50% + ${offset * 40}px)) scale(${scale})`;

              return (
                <div
                  key={index}
                  onClick={() => {
                    if (index === activeIndex) {
                      setIsDetailOpen(true);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  className="absolute cursor-pointer rounded-[8px] shadow-2xl transition-all duration-300 ease-out"
                  style={{
                    width: isMobile
                      ? isActive
                        ? "210px"
                        : "190px"
                      : isActive
                        ? "200px"
                        : "180px",
                    height: isMobile
                      ? isActive
                        ? "210px"
                        : "190px"
                      : isActive
                        ? "200px"
                        : "180px",
                    left: "50%",
                    top: isMobile ? "50%" : isActive ? "40px" : "50px",
                    transform,
                    zIndex: 100 - Math.abs(offset),
                    opacity: Math.abs(offset) > (isMobile ? 6 : 15) ? 0 : 1,
                    boxShadow: isActive
                      ? "0 20px 40px rgba(0,0,0,0.28), 14px 0 22px rgba(0,0,0,0.18), -14px 0 22px rgba(0,0,0,0.18)"
                      : "0 8px 16px rgba(0,0,0,0.16), 4px 0 10px rgba(0,0,0,0.10), -4px 0 10px rgba(0,0,0,0.10)",
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[8px]">
                    <Image
                      src={album.capa}
                      alt={`${album.titulo} cover`}
                      fill
                      className="object-cover"
                      sizes={isMobile ? "210px" : "300px"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={
              isMobile
                ? "absolute bottom-0 left-0 right-0 z-[160]"
                : "mt-10 text-center"
            }
          >
            {isMobile ? (
              <div className="relative rounded-t-[22px] overflow-hidden">
                <div className="absolute inset-0 bg-white/70 backdrop-blur-xl" />
                <div className="relative z-10 px-6 pb-8 pt-5">
                  <h1 className="text-2xl font-bold uppercase text-center">
                    {albumCentral.titulo}
                  </h1>

                  <div className="mt-4 flex items-center justify-between text-sm text-neutral-800">
                    <span>{albumCentral.artista}</span>
                    <span>{albumCentral.ano}</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold uppercase tracking-tight">
                  {albumCentral.titulo}
                </h1>
                <p className="mt-2 text-base">{albumCentral.artista}</p>
                <p className="mt-1 text-xs text-neutral-600">{albumCentral.ano}</p>
              </>
            )}
          </div>
        </section>

        {isDetailOpen && (
          <div
            className="absolute inset-0 z-[200] flex items-center justify-center bg-black/10"
            onClick={() => setIsDetailOpen(false)}
          >
            <div className="flex flex-col items-center gap-5">
              {isMobile && (
                <div className="rounded-full bg-white/90 px-4 py-2 text-sm shadow-md backdrop-blur-sm">
                  Clique para ouvir no Spotify! ↗
                </div>
              )}

              <a
                href={albumCentral.spotify}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="block transition-transform duration-300 hover:scale-[1.02]"
              >
                <div
                  className="relative overflow-hidden rounded-[10px]"
                  style={{
                    width: isMobile ? "250px" : "243px",
                    height: isMobile ? "250px" : "243px",
                    boxShadow:
                      "0 30px 60px rgba(0,0,0,0.28), 16px 0 28px rgba(0,0,0,0.12), -16px 0 28px rgba(0,0,0,0.12)",
                  }}
                >
                  <Image
                    src={albumCentral.capa}
                    alt={`${albumCentral.titulo} cover`}
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}