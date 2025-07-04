"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [555], {
        594: (e, t, a) => {
            a.d(t, {
                g: () => n
            });
            var s = a(4807);

            function n(e) {
                let {
                    className: t = "w-6 h-6"
                } = e;
                return (0, s.jsx)("img", {
                    src: "/site_logo.png",
                    alt: "Gameit Logo",
                    className: "object-contain ".concat(t, " rounded-md")
                })
            }
        },
        1555: (e, t, a) => {
            a.d(t, {
                A: () => C
            });
            var s = a(4807),
                n = a(2015),
                r = a(4950),
                i = a.n(r),
                l = a(5547),
                c = a(6261),
                o = a(9864),
                d = a(7921),
                m = a(6868),
                x = a(5836),
                h = a(1294),
                f = a(8701),
                u = a(6458),
                p = a(8123),
                g = a(3424),
                b = a(7812),
                j = a(3964),
                y = a(594);

            function v(e) {
                let {
                    className: t
                } = e, [a, r] = (0, n.useState)(0), i = async () => {
                    try {
                        let e = await fetch("/api/online-users");
                        if (!e.ok) {
                            console.error("Failed to fetch online users:", e.status);
                            return
                        }
                        let t = await e.json();
                        "number" == typeof t.onlineUsers && r(t.onlineUsers)
                    } catch (e) {
                        console.error("Error fetching online users:", e)
                    }
                };
                return (0, n.useEffect)(() => {
                    i();
                    let e = setInterval(() => {
                        i()
                    }, 7e3);
                    return () => clearInterval(e)
                }, []), (0, s.jsxs)("div", {
                    className: "flex items-center gap-2 ".concat(t),
                    children: [(0, s.jsx)(o.P.div, {
                        className: "w-2 h-2 rounded-full bg-emerald-500",
                        animate: {
                            scale: [1, 1.2, 1],
                            opacity: [1, .8, 1]
                        },
                        transition: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                        }
                    }), (0, s.jsxs)("span", {
                        className: "text-sm font-pixel text-emerald-400",
                        children: [a, " players online"]
                    })]
                })
            }
            var N = a(1309),
                k = a(8846),
                w = a(8006);

            function z(e) {
                let {
                    open: t,
                    onClose: a
                } = e, [r, i] = (0, n.useState)("quick");
                return t ? (0, s.jsx)(c.N, {
                    children: t && (0, s.jsxs)("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                        children: [(0, s.jsx)(o.P.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 bg-black/60 backdrop-blur-sm",
                            onClick: a
                        }), (0, s.jsxs)(o.P.div, {
                            initial: {
                                opacity: 0,
                                scale: .95
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: .95
                            },
                            className: "relative bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-xl",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center justify-between p-6 border-b border-zinc-800",
                                children: [(0, s.jsx)("h2", {
                                    className: "text-xl font-bold font-pixel bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent",
                                    children: "how gameit works"
                                }), (0, s.jsx)(b.$, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: a,
                                    className: "h-8 w-8",
                                    children: (0, s.jsx)(h.A, {
                                        size: 18
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: "p-4",
                                children: (0, s.jsxs)("div", {
                                    className: "flex gap-2 mb-4",
                                    children: [(0, s.jsx)(b.$, {
                                        variant: "quick" === r ? "default" : "outline",
                                        onClick: () => i("quick"),
                                        className: "font-pixel ".concat("quick" === r ? "bg-emerald-500 hover:bg-emerald-600" : "border-zinc-700"),
                                        children: "Quick Guide"
                                    }), (0, s.jsx)(b.$, {
                                        variant: "complete" === r ? "default" : "outline",
                                        onClick: () => i("complete"),
                                        className: "font-pixel ".concat("complete" === r ? "bg-emerald-500 hover:bg-emerald-600" : "border-zinc-700"),
                                        children: "Complete Guide"
                                    })]
                                })
                            }), (0, s.jsx)("div", {
                                className: "p-6 pt-0 overflow-y-auto max-h-[70vh]",
                                children: "quick" === r ? (0, s.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, s.jsxs)("div", {
                                        className: "bg-zinc-800/50 rounded-lg p-5 border border-zinc-700/50 flex gap-4",
                                        children: [(0, s.jsx)("div", {
                                            className: "flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center",
                                            children: (0, s.jsx)(m.A, {
                                                className: "w-6 h-6 text-emerald-400"
                                            })
                                        }), (0, s.jsxs)("div", {
                                            children: [(0, s.jsx)("h3", {
                                                className: "text-lg font-medium mb-2 font-pixel",
                                                children: "1. Enter a Token"
                                            }), (0, s.jsx)("p", {
                                                className: "text-zinc-300",
                                                children: "Enter any Solana token address or ticker in the input field. Our AI will analyze the token's properties."
                                            })]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "bg-zinc-800/50 rounded-lg p-5 border border-zinc-700/50 flex gap-4",
                                        children: [(0, s.jsx)("div", {
                                            className: "flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center",
                                            children: (0, s.jsx)(k.A, {
                                                className: "w-6 h-6 text-emerald-400"
                                            })
                                        }), (0, s.jsxs)("div", {
                                            children: [(0, s.jsx)("h3", {
                                                className: "text-lg font-medium mb-2 font-pixel",
                                                children: "2. Generate a Game"
                                            }), (0, s.jsx)("p", {
                                                className: "text-zinc-300",
                                                children: 'Click "build" and our AI will create a custom game based on your token\'s characteristics and community.'
                                            })]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "bg-zinc-800/50 rounded-lg p-5 border border-zinc-700/50 flex gap-4",
                                        children: [(0, s.jsx)("div", {
                                            className: "flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center",
                                            children: (0, s.jsx)(w.A, {
                                                className: "w-6 h-6 text-emerald-400"
                                            })
                                        }), (0, s.jsxs)("div", {
                                            children: [(0, s.jsx)("h3", {
                                                className: "text-lg font-medium mb-2 font-pixel",
                                                children: "3. Play & Share"
                                            }), (0, s.jsx)("p", {
                                                className: "text-zinc-300",
                                                children: "Play your generated game instantly and share it with your community to increase engagement with your token."
                                            })]
                                        })]
                                    })]
                                }) : (0, s.jsxs)("div", {
                                    className: "space-y-8",
                                    children: [" ", (0, s.jsxs)("div", {
                                        className: "mb-8",
                                        children: [" ", (0, s.jsx)("h3", {
                                            className: "text-xl mb-4 font-pixel text-emerald-400",
                                            children: "our mission"
                                        }), (0, s.jsx)("p", {
                                            className: "text-zinc-300",
                                            children: "At gameit, we're revolutionizing the web3 landscape by empowering creators. Forget gatekeepers and valueless tokens. Our platform enables you to transform your token into a dynamic app or game, no coding required. We're building a space where innovation thrives, and tokens gain tangible utility and value."
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "border-t border-zinc-700/50 my-6"
                                    }), (0, s.jsxs)("div", {
                                        className: "mb-8",
                                        children: [" ", (0, s.jsx)("h3", {
                                            className: "text-xl mb-6 font-pixel text-emerald-400",
                                            children: "The Full Playbook"
                                        }), (0, s.jsxs)("div", {
                                            className: "mb-6 flex",
                                            children: [" ", (0, s.jsx)("div", {
                                                className: "mr-4 flex-shrink-0",
                                                children: (0, s.jsx)("div", {
                                                    className: "w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 font-mono font-bold",
                                                    children: "01"
                                                })
                                            }), (0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("h4", {
                                                    className: "text-lg mb-2 font-pixel",
                                                    children: "Enter a Token & Define Your Vision"
                                                }), (0, s.jsx)("p", {
                                                    className: "text-zinc-300 mb-3",
                                                    children: "Provide any Solana token. Our AI performs an initial analysis of on-chain data, market trends, and community sentiment. You can then guide the AI by specifying game mechanics, art style, and target audience."
                                                }), (0, s.jsxs)("ul", {
                                                    className: "space-y-1 text-sm text-zinc-400",
                                                    children: [(0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Deep dive into tokenomics and holder distribution."
                                                        })]
                                                    }), (0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Analyze social buzz and key influencers."
                                                        })]
                                                    }), (0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Incorporate your project's unique narrative and branding."
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "mb-6 flex",
                                            children: [" ", (0, s.jsx)("div", {
                                                className: "mr-4 flex-shrink-0",
                                                children: (0, s.jsx)("div", {
                                                    className: "w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 font-mono font-bold",
                                                    children: "02"
                                                })
                                            }), (0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("h4", {
                                                    className: "text-lg mb-2 font-pixel",
                                                    children: "AI-Powered Game Generation"
                                                }), (0, s.jsx)("p", {
                                                    className: "text-zinc-300 mb-3",
                                                    children: "Gameit's AI engine crafts a bespoke game. It selects a suitable genre, designs core mechanics reflecting token utility, and generates initial visual assets and narrative elements aligned with your brand."
                                                }), (0, s.jsxs)("ul", {
                                                    className: "space-y-1 text-sm text-zinc-400",
                                                    children: [(0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsxs)("span", {
                                                            children: ["Genre selection based on token characteristics (e.g., DeFi token -", ">", " strategy game)."]
                                                        })]
                                                    }), (0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Mechanics design (e.g., staking in-game for rewards, token burns for power-ups)."
                                                        })]
                                                    }), (0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Procedurally generated levels, characters, and lore."
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "mb-6 flex",
                                            children: [" ", (0, s.jsx)("div", {
                                                className: "mr-4 flex-shrink-0",
                                                children: (0, s.jsx)("div", {
                                                    className: "w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 font-mono font-bold",
                                                    children: "03"
                                                })
                                            }), (0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("h4", {
                                                    className: "text-lg mb-2 font-pixel",
                                                    children: "Customize, Test & Refine"
                                                }), (0, s.jsx)("p", {
                                                    className: "text-zinc-300 mb-3",
                                                    children: "Access an intuitive editor to tweak every aspect of your game. Modify game rules, update art assets, integrate specific token functionalities, and test thoroughly with our built-in emulator."
                                                }), (0, s.jsxs)("ul", {
                                                    className: "space-y-1 text-sm text-zinc-400",
                                                    children: [(0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Drag-and-drop interface for gameplay adjustments."
                                                        })]
                                                    }), (0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Upload custom art, sound, and 3D models."
                                                        })]
                                                    }), (0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Live preview and community feedback tools."
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "mb-6 flex",
                                            children: [" ", (0, s.jsx)("div", {
                                                className: "mr-4 flex-shrink-0",
                                                children: (0, s.jsx)("div", {
                                                    className: "w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 font-mono font-bold",
                                                    children: "04"
                                                })
                                            }), (0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("h4", {
                                                    className: "text-lg mb-2 font-pixel",
                                                    children: "Deploy & Engage Your Community"
                                                }), (0, s.jsx)("p", {
                                                    className: "text-zinc-300 mb-3",
                                                    children: "Launch your game with one click. Gameit handles hosting and scalability. Share directly with your community, run tournaments, and offer token-gated access or rewards."
                                                }), (0, s.jsxs)("ul", {
                                                    className: "space-y-1 text-sm text-zinc-400",
                                                    children: [(0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Embeddable game widget for your website."
                                                        })]
                                                    }), (0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Leaderboards and social sharing features."
                                                        })]
                                                    }), (0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Integrate with Discord bots for community events."
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "mb-6 flex",
                                            children: [" ", (0, s.jsx)("div", {
                                                className: "mr-4 flex-shrink-0",
                                                children: (0, s.jsx)("div", {
                                                    className: "w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 font-mono font-bold",
                                                    children: "05"
                                                })
                                            }), (0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("h4", {
                                                    className: "text-lg mb-2 font-pixel",
                                                    children: "Analyze, Iterate & Grow"
                                                }), (0, s.jsx)("p", {
                                                    className: "text-zinc-300 mb-3",
                                                    children: "Monitor player engagement, token interactions, and game performance through our analytics dashboard. Use these insights to update your game, introduce new features, and continuously enhance token utility."
                                                }), (0, s.jsxs)("ul", {
                                                    className: "space-y-1 text-sm text-zinc-400",
                                                    children: [(0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Real-time analytics on player behavior."
                                                        })]
                                                    }), (0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "A/B testing for new game features."
                                                        })]
                                                    }), (0, s.jsxs)("li", {
                                                        className: "flex items-start gap-2",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "mt-1 text-emerald-400",
                                                            children: "•"
                                                        }), (0, s.jsx)("span", {
                                                            children: "Direct feedback channels from players to developers."
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                }) : null
            }
            var A = a(5122),
                I = a.n(A);

            function S(e) {
                let {
                    opacity: t = .85
                } = e, [a, r] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    r(!0)
                }, []), (0, s.jsxs)("div", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        zIndex: 0,
                        pointerEvents: "none",
                        opacity: t
                    },
                    className: "jsx-afea1927bc347052",
                    children: [(0, s.jsx)(I(), {
                        id: "afea1927bc347052",
                        children: "@-webkit-keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-webkit-keyframes patternMove{0%{background-position:0 0}100%{background-position:40px 40px}}@-moz-keyframes patternMove{0%{background-position:0 0}100%{background-position:40px 40px}}@-o-keyframes patternMove{0%{background-position:0 0}100%{background-position:40px 40px}}@keyframes patternMove{0%{background-position:0 0}100%{background-position:40px 40px}}@-webkit-keyframes ditherFloat{0%{-webkit-transform:translatey(0)translatex(0)scale(1);transform:translatey(0)translatex(0)scale(1);opacity:.15}50%{-webkit-transform:translatey(-10px)translatex(5px)scale(1.05);transform:translatey(-10px)translatex(5px)scale(1.05);opacity:.25}100%{-webkit-transform:translatey(0)translatex(0)scale(1);transform:translatey(0)translatex(0)scale(1);opacity:.15}}@-moz-keyframes ditherFloat{0%{-moz-transform:translatey(0)translatex(0)scale(1);transform:translatey(0)translatex(0)scale(1);opacity:.15}50%{-moz-transform:translatey(-10px)translatex(5px)scale(1.05);transform:translatey(-10px)translatex(5px)scale(1.05);opacity:.25}100%{-moz-transform:translatey(0)translatex(0)scale(1);transform:translatey(0)translatex(0)scale(1);opacity:.15}}@-o-keyframes ditherFloat{0%{-o-transform:translatey(0)translatex(0)scale(1);transform:translatey(0)translatex(0)scale(1);opacity:.15}50%{-o-transform:translatey(-10px)translatex(5px)scale(1.05);transform:translatey(-10px)translatex(5px)scale(1.05);opacity:.25}100%{-o-transform:translatey(0)translatex(0)scale(1);transform:translatey(0)translatex(0)scale(1);opacity:.15}}@keyframes ditherFloat{0%{-webkit-transform:translatey(0)translatex(0)scale(1);-moz-transform:translatey(0)translatex(0)scale(1);-o-transform:translatey(0)translatex(0)scale(1);transform:translatey(0)translatex(0)scale(1);opacity:.15}50%{-webkit-transform:translatey(-10px)translatex(5px)scale(1.05);-moz-transform:translatey(-10px)translatex(5px)scale(1.05);-o-transform:translatey(-10px)translatex(5px)scale(1.05);transform:translatey(-10px)translatex(5px)scale(1.05);opacity:.25}100%{-webkit-transform:translatey(0)translatex(0)scale(1);-moz-transform:translatey(0)translatex(0)scale(1);-o-transform:translatey(0)translatex(0)scale(1);transform:translatey(0)translatex(0)scale(1);opacity:.15}}@-webkit-keyframes colorPulse{0%,100%{-webkit-filter:hue-rotate(0deg)saturate(1);filter:hue-rotate(0deg)saturate(1)}50%{-webkit-filter:hue-rotate(30deg)saturate(1.3);filter:hue-rotate(30deg)saturate(1.3)}}@-moz-keyframes colorPulse{0%,100%{filter:hue-rotate(0deg)saturate(1)}50%{filter:hue-rotate(30deg)saturate(1.3)}}@-o-keyframes colorPulse{0%,100%{filter:hue-rotate(0deg)saturate(1)}50%{filter:hue-rotate(30deg)saturate(1.3)}}@keyframes colorPulse{0%,100%{-webkit-filter:hue-rotate(0deg)saturate(1);filter:hue-rotate(0deg)saturate(1)}50%{-webkit-filter:hue-rotate(30deg)saturate(1.3);filter:hue-rotate(30deg)saturate(1.3)}}"
                    }), (0, s.jsx)("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            width: "200%",
                            height: "200%",
                            background: "linear-gradient(132deg, #13342f, #0a5648, #2a9979, #0d4448, #225c4a)",
                            backgroundSize: "400% 400%",
                            animation: "gradient 15s ease infinite",
                            transform: "translateZ(0)"
                        },
                        className: "jsx-afea1927bc347052"
                    }), (0, s.jsx)("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundSize: "20px 20px",
                            backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 2px, transparent 2px, transparent 8px)",
                            animation: "patternMove 10s linear infinite",
                            zIndex: 1,
                            opacity: .5
                        },
                        className: "jsx-afea1927bc347052"
                    }), a && (0, s.jsx)("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundSize: "5px 5px",
                            opacity: .2,
                            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                            animation: "ditherFloat 8s ease-in-out infinite alternate",
                            zIndex: 2
                        },
                        className: "jsx-afea1927bc347052"
                    }), a && (0, s.jsx)("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            mixBlendMode: "overlay",
                            animation: "colorPulse 8s infinite",
                            background: "radial-gradient(circle, transparent 30%, rgba(0, 60, 40, 0.3) 70%)",
                            zIndex: 3
                        },
                        className: "jsx-afea1927bc347052"
                    })]
                })
            }
            var E = a(8640),
                T = a(5475);

            function C(e) {
                let {
                    children: t
                } = e, [a, r] = (0, n.useState)(!0), [k, w] = (0, n.useState)(!1), [A, I] = (0, n.useState)(!1), C = (0, l.usePathname)(), {
                    connected: O,
                    publicKey: D
                } = (0, E.v)(), {
                    toast: P
                } = (0, T.dj)(), [_, M] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    O && D && !_ && (P({
                        title: "Wallet Connected!",
                        description: "Connected with public key: ".concat(D.toBase58()),
                        variant: "default"
                    }), M(!0))
                }, [O, D, _, P]), (0, n.useEffect)(() => {
                    let e = e => {
                        "b" === e.key && (e.metaKey || e.ctrlKey) && (e.preventDefault(), r(e => !e))
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, []);
                let G = e => "".concat("flex items-center gap-3 px-4 py-2 mb-1 rounded-md mx-2", " ").concat(C === e ? "bg-zinc-800/80 text-white" : "text-zinc-400 hover:bg-zinc-800/80 hover:text-white");
                return (0, s.jsxs)("div", {
                    className: "flex min-h-screen bg-[#121212] text-white font-sans relative overflow-hidden",
                    children: [(0, s.jsx)(S, {
                        opacity: .3
                    }), (0, s.jsx)(c.N, {
                        initial: !1,
                        children: a && (0, s.jsxs)(o.P.div, {
                            initial: {
                                width: 0,
                                opacity: 0
                            },
                            animate: {
                                width: 260,
                                opacity: 1
                            },
                            exit: {
                                width: 0,
                                opacity: 0
                            },
                            transition: {
                                duration: .3,
                                ease: "easeInOut"
                            },
                            className: "border-r border-zinc-800 flex flex-col fixed top-0 left-0 z-20 bg-[#121212]/90 backdrop-blur-md h-screen",
                            children: [(0, s.jsxs)("div", {
                                className: "p-4 flex items-center gap-2",
                                children: [(0, s.jsx)(y.g, {
                                    className: "w-8 h-8"
                                }), (0, s.jsx)("span", {
                                    className: "font-pixel text-xl tracking-tight",
                                    children: "gameit"
                                }), (0, s.jsx)("span", {
                                    className: "text-xs px-2 py-0.5 bg-zinc-800 rounded-full ml-auto",
                                    children: "alpha"
                                })]
                            }), (0, s.jsx)("div", {
                                className: "p-3",
                                children: (0, s.jsxs)(b.$, {
                                    variant: "secondary",
                                    className: "w-full justify-between bg-zinc-800/80 hover:bg-zinc-700 text-white font-pixel",
                                    children: ["new game ", (0, s.jsx)("span", {
                                        className: "text-xs",
                                        children: "+"
                                    })]
                                })
                            }), (0, s.jsxs)("nav", {
                                className: "py-4",
                                children: [
                                    (0, s.jsxs)(i(), {
                                        href: "/",
                                        className: G("/"),
                                        children: [
                                            (0, s.jsx)("div", {
                                                className: "w-5 h-5 flex items-center justify-center",
                                                children: (0, s.jsx)(d.A, { size: 18 })
                                            }),
                                            (0, s.jsx)("span", {
                                                className: "font-medium",
                                                children: "dashboard"
                                            })
                                        ]
                                    }),
                                    (0, s.jsxs)(i(), {
                                        href: "/tokens",
                                        className: G("/tokens"),
                                        children: [
                                            (0, s.jsx)("div", {
                                                className: "w-5 h-5 flex items-center justify-center",
                                                children: (0, s.jsx)(m.A, { size: 18 })
                                            }),
                                            (0, s.jsx)("span", {
                                                children: "top tokens"
                                            })
                                        ]
                                    }),
                                    (0, s.jsxs)(i(), {
                                        href: "#",
                                        onClick: e => { e.preventDefault(), I(!0) },
                                        className: G("/leaderboard"),
                                        children: [
                                            (0, s.jsx)("div", {
                                                className: "w-5 h-5 flex items-center justify-center",
                                                children: (0, s.jsx)(x.A, { size: 18 })
                                            }),
                                            (0, s.jsx)("span", {
                                                children: "leaderboard"
                                            }),
                                            (0, s.jsx)("span", {
                                                className: "ml-auto text-xs px-1.5 py-0.5 bg-emerald-500 text-white rounded-md",
                                                children: "soon"
                                            })
                                        ]
                                    })
                                ]
                            }), (0, s.jsxs)("div", {
                                className: "mt-auto p-4 border-t border-zinc-800",
                                children: [(0, s.jsxs)("a", {
                                    href: "https://x.com/GameitToken",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "w-full flex items-center gap-3 px-4 py-2 mb-2 rounded-md text-zinc-400 hover:bg-zinc-800/80 hover:text-white font-pixel",
                                    children: [(0, s.jsx)(p.g, {
                                        icon: g.NLt,
                                        className: "w-5 h-5"
                                    }), (0, s.jsx)("span", {
                                        children: "Twitter"
                                    })]
                                }), (0, s.jsxs)("a", {
                                    href: "https://t.me/GameItToken",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "w-full flex items-center gap-3 px-4 py-2 mb-2 rounded-md text-zinc-400 hover:bg-zinc-800/80 hover:text-white font-pixel",
                                    children: [(0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "20",
                                        fill: "currentColor",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: (0, s.jsx)("path", {
                                            d: "M9.993 15.674l-.39 4.13c.56 0 .803-.24 1.096-.527l2.63-2.497 5.454 3.98c1 .552 1.72.262 1.97-.92l3.57-16.7c.326-1.51-.547-2.1-1.52-1.74l-21.3 8.2c-1.45.56-1.43 1.36-.25 1.72l5.44 1.7 12.63-7.97c.59-.38 1.13-.17.69.24"
                                        })
                                    }), (0, s.jsx)("span", {
                                        children: "Telegram"
                                    })]
                                }), (0, s.jsxs)("a", {
                                    href: "https://dexscreener.com/solana/97h3dtCpUDjEKwzqk6FXvNceyxWDuWfThk7YcH5pump",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "w-full flex items-center gap-3 px-4 py-2 mb-2 rounded-md text-zinc-400 hover:bg-zinc-800/80 hover:text-white font-pixel",
                                    children: [(0, s.jsx)("img", {
                                        src: "dex_logo.png",
                                        alt: "Dexscreener",
                                        className: "w-5 h-5"
                                    }), (0, s.jsx)("span", {
                                        children: "Dexscreener"
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: "text-xs text-zinc-500",
                                    children: "Create. Play. Earn."
                                })]
                            })]
                        })
                    }), (0, s.jsxs)("div", {
                        className: "flex-1 flex flex-col relative z-10 transition-all duration-300 ease-in-out ".concat(a ? "ml-[260px]" : "ml-0"),
                        children: [(0, s.jsxs)("header", {
                            className: "h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-[#121212]/80 backdrop-blur-md",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, s.jsx)(b.$, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: () => r(e => !e),
                                    className: "h-8 w-8 text-zinc-400 hover:text-white",
                                    children: a ? (0, s.jsx)(h.A, {
                                        size: 18
                                    }) : (0, s.jsx)(f.A, {
                                        size: 18
                                    })
                                }), !a && (0, s.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, s.jsx)(y.g, {
                                        className: "w-6 h-6"
                                    }), (0, s.jsx)("span", {
                                        className: "font-pixel text-base tracking-tight",
                                        children: "gameit"
                                    })]
                                }), (0, s.jsx)(v, {
                                    className: "ml-3"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, s.jsxs)(b.$, {
                                    variant: "ghost",
                                    className: "text-zinc-300 hover:text-white font-pixel flex items-center gap-2",
                                    onClick: () => w(!0),
                                    children: [(0, s.jsx)(u.A, {
                                        size: 16
                                    }), "how it works"]
                                }), (0, s.jsx)("div", {
                                    className: "flex justify-center items-center",
                                    children: (0, s.jsx)(N.x, {
                                        className: "!bg-emerald-500 hover:!bg-emerald-600 !text-white !font-pixel !h-auto !px-4 !py-2"
                                    })
                                })]
                            })]
                        }), (0, s.jsx)("main", {
                            className: "flex-1 p-6 overflow-auto",
                            children: t
                        })]
                    }), (0, s.jsx)(z, {
                        open: k,
                        onClose: () => w(!1)
                    }), (0, s.jsx)(j.lG, {
                        open: A,
                        onOpenChange: I,
                        children: (0, s.jsx)(j.Cf, {
                            className: "sm:max-w-[425px] font-pixel",
                            children: (0, s.jsx)(j.rr, {
                                className: "text-center text-lg py-4",
                                children: "Leaderboard coming soon!"
                            })
                        })
                    })]
                })
            }
        },
        1984: (e, t, a) => {
            a.d(t, {
                M: () => i,
                cn: () => r
            });
            var s = a(910),
                n = a(4975);

            function r() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, n.QP)((0, s.$)(t))
            }

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                if (!e) return "Unknown";
                if (e.length <= t + a + 3) return e;
                let s = e.substring(0, t),
                    n = e.substring(e.length - a);
                return "".concat(s, "...").concat(n)
            }
        },
        3964: (e, t, a) => {
            a.d(t, {
                Cf: () => m,
                L3: () => h,
                c7: () => x,
                lG: () => c,
                rr: () => f
            });
            var s = a(4807),
                n = a(2015),
                r = a(9651),
                i = a(1294),
                l = a(1984);
            let c = r.bL;
            r.l9;
            let o = r.ZL;
            r.bm;
            let d = n.forwardRef((e, t) => {
                let {
                    className: a,
                    ...n
                } = e;
                return (0, s.jsx)(r.hJ, {
                    ref: t,
                    className: (0, l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
                    ...n
                })
            });
            d.displayName = r.hJ.displayName;
            let m = n.forwardRef((e, t) => {
                let {
                    className: a,
                    children: n,
                    ...c
                } = e;
                return (0, s.jsxs)(o, {
                    children: [(0, s.jsx)(d, {}), (0, s.jsxs)(r.UC, {
                        ref: t,
                        className: (0, l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", a),
                        ...c,
                        children: [n, (0, s.jsxs)(r.bm, {
                            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            children: [(0, s.jsx)(i.A, {
                                className: "h-4 w-4"
                            }), (0, s.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            m.displayName = r.UC.displayName;
            let x = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, l.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t),
                    ...a
                })
            };
            x.displayName = "DialogHeader";
            let h = n.forwardRef((e, t) => {
                let {
                    className: a,
                    ...n
                } = e;
                return (0, s.jsx)(r.hE, {
                    ref: t,
                    className: (0, l.cn)("text-lg font-semibold leading-none tracking-tight", a),
                    ...n
                })
            });
            h.displayName = r.hE.displayName;
            let f = n.forwardRef((e, t) => {
                let {
                    className: a,
                    ...n
                } = e;
                return (0, s.jsx)(r.VY, {
                    ref: t,
                    className: (0, l.cn)("text-sm text-muted-foreground", a),
                    ...n
                })
            });
            f.displayName = r.VY.displayName
        },
        5475: (e, t, a) => {
            a.d(t, {
                dj: () => x
            });
            var s = a(2015);
            let n = 0,
                r = new Map,
                i = e => {
                    if (r.has(e)) return;
                    let t = setTimeout(() => {
                        r.delete(e), d({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    r.set(e, t)
                },
                l = (e, t) => {
                    switch (t.type) {
                        case "ADD_TOAST":
                            return {
                                ...e, toasts: [t.toast, ...e.toasts].slice(0, 1)
                            };
                        case "UPDATE_TOAST":
                            return {
                                ...e, toasts: e.toasts.map(e => e.id === t.toast.id ? {
                                    ...e,
                                    ...t.toast
                                } : e)
                            };
                        case "DISMISS_TOAST": {
                            let {
                                toastId: a
                            } = t;
                            return a ? i(a) : e.toasts.forEach(e => {
                                i(e.id)
                            }), {
                                ...e,
                                toasts: e.toasts.map(e => e.id === a || void 0 === a ? {
                                    ...e,
                                    open: !1
                                } : e)
                            }
                        }
                        case "REMOVE_TOAST":
                            if (void 0 === t.toastId) return {
                                ...e,
                                toasts: []
                            };
                            return {
                                ...e, toasts: e.toasts.filter(e => e.id !== t.toastId)
                            }
                    }
                },
                c = [],
                o = {
                    toasts: []
                };

            function d(e) {
                o = l(o, e), c.forEach(e => {
                    e(o)
                })
            }

            function m(e) {
                let {
                    ...t
                } = e, a = (n = (n + 1) % Number.MAX_SAFE_INTEGER).toString(), s = () => d({
                    type: "DISMISS_TOAST",
                    toastId: a
                });
                return d({
                    type: "ADD_TOAST",
                    toast: {
                        ...t,
                        id: a,
                        open: !0,
                        onOpenChange: e => {
                            e || s()
                        }
                    }
                }), {
                    id: a,
                    dismiss: s,
                    update: e => d({
                        type: "UPDATE_TOAST",
                        toast: {
                            ...e,
                            id: a
                        }
                    })
                }
            }

            function x() {
                let [e, t] = s.useState(o);
                return s.useEffect(() => (c.push(t), () => {
                    let e = c.indexOf(t);
                    e > -1 && c.splice(e, 1)
                }), [e]), {
                    ...e,
                    toast: m,
                    dismiss: e => d({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }
        },
        7812: (e, t, a) => {
            a.d(t, {
                $: () => o
            });
            var s = a(4807),
                n = a(2015),
                r = a(7346),
                i = a(176),
                l = a(1984);
            let c = (0, i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                o = n.forwardRef((e, t) => {
                    let {
                        className: a,
                        variant: n,
                        size: i,
                        asChild: o = !1,
                        ...d
                    } = e, m = o ? r.DX : "button";
                    return (0, s.jsx)(m, {
                        className: (0, l.cn)(c({
                            variant: n,
                            size: i,
                            className: a
                        })),
                        ref: t,
                        ...d
                    })
                });
            o.displayName = "Button"
        }
    }
]);