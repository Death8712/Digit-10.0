sed -i '/{event.about || "Join us for an exciting technology competition where students showcase their innovation, creativity, and technical prowess. Push your limits and discover the digital frontier."}/!b;n;a\
                    {event.registrationLink && (\
                      <div className="mt-6">\
                        <a\
                          href={event.registrationLink}\
                          target="_blank"\
                          rel="noopener noreferrer"\
                          className={cn(\
                            "inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300 border",\
                            categoryAccent ? categoryAccent.replace("text-", "border-").replace("text-", "bg-").replace(/$/, "/10 hover:bg-").concat("/20") : "border-neon-cyan/50 bg-neon-cyan/10 hover:bg-neon-cyan/20"\
                          )}\
                          style={{ color: "currentColor" }}\
                        >\
                          <Target size={16} />\
                          Register Now\
                        </a>\
                      </div>\
                    )}
' src/components/EventModal.tsx
