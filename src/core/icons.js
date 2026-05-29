(() => {
  "use strict";

  function asset(path) {
    if (!window.Deadlock2DireStandalone && typeof chrome !== "undefined" && chrome.runtime && typeof chrome.runtime.getURL === "function") {
      return chrome.runtime.getURL(path);
    }
    return publicAssetUrl(path);
  }

  function publicAssetUrl(path) {
    const fileName = String(path || "").replace(/^assets\/icons\//, "");
    const parts = fileName.split("-");
    const kind = parts[0];

    if (kind === "heroes" && parts.length >= 2) {
      return `https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/${parts.slice(1).join("-")}`;
    }

    if (kind === "items" && parts.length >= 3) {
      return `https://assets-bucket.deadlock-api.com/assets-api-res/images/items/${parts[1]}/${parts.slice(2).join("-")}`;
    }

    if (kind === "abilities" && parts.length >= 2) {
      const hasSubfolder = parts.length >= 3;
      const abilityPath = hasSubfolder ? `${parts[1]}/${parts.slice(2).join("-")}` : parts.slice(1).join("-");
      return `https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/${abilityPath}`;
    }

    return path;
  }

  // there's much better ways, but YOLO since this is very niche
  window.DeadlockDotaIconIndex = {
  "heroes": {
    "Infernus": {
      "icon": asset("assets/icons/heroes-inferno_sm.png"),
      "abilities": {
        "Napalm": asset("assets/icons/abilities-inferno_molotov.png"),
        "Flame Dash": asset("assets/icons/abilities-inferno_dash.png"),
        "FlameDash": asset("assets/icons/abilities-inferno_dash.png"),
        "Afterburn": asset("assets/icons/abilities-inferno_deflect.png"),
        "Concussive Combustion": asset("assets/icons/abilities-inferno_bomb.png"),
        "ConcussiveCombustion": asset("assets/icons/abilities-inferno_bomb.png")
      }
    },
    "Seven": {
      "icon": asset("assets/icons/heroes-gigawatt_sm.png"),
      "abilities": {
        "Lightning Ball": asset("assets/icons/abilities-giga_ball.png"),
        "LightningBall": asset("assets/icons/abilities-giga_ball.png"),
        "Static Charge": asset("assets/icons/abilities-giga_static.png"),
        "StaticCharge": asset("assets/icons/abilities-giga_static.png"),
        "Power Surge": asset("assets/icons/abilities-giga_chain.png"),
        "PowerSurge": asset("assets/icons/abilities-giga_chain.png"),
        "Storm Cloud": asset("assets/icons/abilities-giga_storm.png"),
        "StormCloud": asset("assets/icons/abilities-giga_storm.png")
      }
    },
    "Vindicta": {
      "icon": asset("assets/icons/heroes-hornet_sm.png"),
      "abilities": {
        "Stake": asset("assets/icons/abilities-hornet-vindicta_stake.png"),
        "Flight": asset("assets/icons/abilities-hornet-vindicta_flight.png"),
        "Crow Familiar": asset("assets/icons/abilities-hornet-hornet_crow.png"),
        "CrowFamiliar": asset("assets/icons/abilities-hornet-hornet_crow.png"),
        "Assassinate": asset("assets/icons/abilities-hornet-hornet_assassinate.png")
      }
    },
    "Lady Geist": {
      "icon": asset("assets/icons/heroes-spectre_sm.png"),
      "abilities": {
        "Essence Bomb": asset("assets/icons/abilities-spectre-blood_bomb.png"),
        "EssenceBomb": asset("assets/icons/abilities-spectre-blood_bomb.png"),
        "Life Drain": asset("assets/icons/abilities-spectre-life_drain.png"),
        "LifeDrain": asset("assets/icons/abilities-spectre-life_drain.png"),
        "Malice": asset("assets/icons/abilities-spectre-geist_dagger.png"),
        "Soul Exchange": asset("assets/icons/abilities-spectre-blood_exchange.png"),
        "SoulExchange": asset("assets/icons/abilities-spectre-blood_exchange.png")
      }
    },
    "Abrams": {
      "icon": asset("assets/icons/heroes-bull_sm.png"),
      "abilities": {
        "Siphon Life": asset("assets/icons/abilities-bull_drain.png"),
        "SiphonLife": asset("assets/icons/abilities-bull_drain.png"),
        "Shoulder Charge": asset("assets/icons/abilities-bull_charge.png"),
        "ShoulderCharge": asset("assets/icons/abilities-bull_charge.png"),
        "Infernal Resilience": asset("assets/icons/abilities-bull_beef.png"),
        "InfernalResilience": asset("assets/icons/abilities-bull_beef.png"),
        "Seismic Impact": asset("assets/icons/abilities-bull_jump.png"),
        "SeismicImpact": asset("assets/icons/abilities-bull_jump.png")
      }
    },
    "Wraith": {
      "icon": asset("assets/icons/heroes-wraith_sm.png"),
      "abilities": {
        "Card Trick": asset("assets/icons/abilities-wraith_card_trick.png"),
        "CardTrick": asset("assets/icons/abilities-wraith_card_trick.png"),
        "Project Mind": asset("assets/icons/abilities-wraith_teleport.png"),
        "ProjectMind": asset("assets/icons/abilities-wraith_teleport.png"),
        "Full Auto": asset("assets/icons/abilities-wraith_aura.png"),
        "FullAuto": asset("assets/icons/abilities-wraith_aura.png"),
        "Telekinesis": asset("assets/icons/abilities-wraith_lift.png")
      }
    },
    "McGinnis": {
      "icon": asset("assets/icons/heroes-engineer_sm.png"),
      "abilities": {
        "Mini Turret": asset("assets/icons/abilities-engineer_turret.png"),
        "MiniTurret": asset("assets/icons/abilities-engineer_turret.png"),
        "Medicinal Specter": asset("assets/icons/abilities-engineer_resupply.png"),
        "MedicinalSpecter": asset("assets/icons/abilities-engineer_resupply.png"),
        "Spectral Wall": asset("assets/icons/abilities-engineer_fissure_2.png"),
        "SpectralWall": asset("assets/icons/abilities-engineer_fissure_2.png"),
        "Heavy Barrage": asset("assets/icons/abilities-engineer_rockets.png"),
        "HeavyBarrage": asset("assets/icons/abilities-engineer_rockets.png")
      }
    },
    "Paradox": {
      "icon": asset("assets/icons/heroes-chrono_sm.png"),
      "abilities": {
        "Pulse Grenade": asset("assets/icons/abilities-chrono-chrono_time_bomb.png"),
        "PulseGrenade": asset("assets/icons/abilities-chrono-chrono_time_bomb.png"),
        "Time Wall": asset("assets/icons/abilities-chrono-chrono_time_wall.png"),
        "TimeWall": asset("assets/icons/abilities-chrono-chrono_time_wall.png"),
        "Kinetic Carbine": asset("assets/icons/abilities-duo-duo_attack.png"),
        "KineticCarbine": asset("assets/icons/abilities-duo-duo_attack.png"),
        "Paradoxical Swap": asset("assets/icons/abilities-chrono-chrono_swap.png"),
        "ParadoxicalSwap": asset("assets/icons/abilities-chrono-chrono_swap.png")
      }
    },
    "Dynamo": {
      "icon": asset("assets/icons/heroes-sumo_sm.png"),
      "abilities": {
        "Kinetic Pulse": asset("assets/icons/abilities-sumo-sumo_stomp.png"),
        "KineticPulse": asset("assets/icons/abilities-sumo-sumo_stomp.png"),
        "Quantum Entanglement": asset("assets/icons/abilities-sumo-sumo_quantum.png"),
        "QuantumEntanglement": asset("assets/icons/abilities-sumo-sumo_quantum.png"),
        "Rejuvenating Aurora": asset("assets/icons/abilities-sumo-sumo_pork_bun.png"),
        "RejuvenatingAurora": asset("assets/icons/abilities-sumo-sumo_pork_bun.png"),
        "Singularity": asset("assets/icons/abilities-sumo-sumo_vacuum.png")
      }
    },
    "Kelvin": {
      "icon": asset("assets/icons/heroes-kelvin_sm.png"),
      "abilities": {
        "Frost Grenade": asset("assets/icons/abilities-kelvin-freezing_grenade.png"),
        "FrostGrenade": asset("assets/icons/abilities-kelvin-freezing_grenade.png"),
        "Ice Path": asset("assets/icons/abilities-kelvin-ice_path.png"),
        "IcePath": asset("assets/icons/abilities-kelvin-ice_path.png"),
        "Arctic Beam": asset("assets/icons/abilities-kelvin-ice_beam.png"),
        "ArcticBeam": asset("assets/icons/abilities-kelvin-ice_beam.png"),
        "Frozen Shelter": asset("assets/icons/abilities-kelvin-frozen_shelter.png"),
        "FrozenShelter": asset("assets/icons/abilities-kelvin-frozen_shelter.png")
      }
    },
    "Haze": {
      "icon": asset("assets/icons/heroes-haze_sm.png"),
      "abilities": {
        "Sleep Dagger": asset("assets/icons/abilities-haze-haze_sleep_dagger.png"),
        "SleepDagger": asset("assets/icons/abilities-haze-haze_sleep_dagger.png"),
        "Smoke Bomb": asset("assets/icons/abilities-haze-haze_smoke_bomb.png"),
        "SmokeBomb": asset("assets/icons/abilities-haze-haze_smoke_bomb.png"),
        "Fixation": asset("assets/icons/abilities-haze-haze_fixation.png"),
        "Bullet Dance": asset("assets/icons/abilities-haze-haze_bullet_flurry.png"),
        "BulletDance": asset("assets/icons/abilities-haze-haze_bullet_flurry.png")
      }
    },
    "Holliday": {
      "icon": asset("assets/icons/heroes-astro_sm.png"),
      "abilities": {
        "Powder Keg": asset("assets/icons/abilities-astro-holliday_powder_keg.png"),
        "PowderKeg": asset("assets/icons/abilities-astro-holliday_powder_keg.png"),
        "Bounce Pad": asset("assets/icons/abilities-astro-holliday_bounce_pad.png"),
        "BouncePad": asset("assets/icons/abilities-astro-holliday_bounce_pad.png"),
        "Crackshot": asset("assets/icons/abilities-astro-holliday_crackshot.png"),
        "Spirit Lasso": asset("assets/icons/abilities-astro-holliday_spirit_lasso.png"),
        "SpiritLasso": asset("assets/icons/abilities-astro-holliday_spirit_lasso.png")
      }
    },
    "Bebop": {
      "icon": asset("assets/icons/heroes-bebop_sm.png"),
      "abilities": {
        "Exploding Uppercut": asset("assets/icons/abilities-bebop-bebop_uppercut.png"),
        "ExplodingUppercut": asset("assets/icons/abilities-bebop-bebop_uppercut.png"),
        "Sticky Bomb": asset("assets/icons/abilities-bebop-bebop_sticky_bomb.png"),
        "StickyBomb": asset("assets/icons/abilities-bebop-bebop_sticky_bomb.png"),
        "Grapple Arm": asset("assets/icons/abilities-bebop-bebop_hook.png"),
        "GrappleArm": asset("assets/icons/abilities-bebop-bebop_hook.png"),
        "Hyper Beam": asset("assets/icons/abilities-bebop-bebop_hyper_beam.png"),
        "HyperBeam": asset("assets/icons/abilities-bebop-bebop_hyper_beam.png")
      }
    },
    "Calico": {
      "icon": asset("assets/icons/heroes-nano_sm.png"),
      "abilities": {
        "Gloom Bombs": asset("assets/icons/abilities-nano-nano_clustergrenade.png"),
        "GloomBombs": asset("assets/icons/abilities-nano-nano_clustergrenade.png"),
        "Leaping Slash": asset("assets/icons/abilities-nano-nano_dash.png"),
        "LeapingSlash": asset("assets/icons/abilities-nano-nano_dash.png"),
        "Ava": asset("assets/icons/abilities-nano-nano_catform.png"),
        "Return to Shadows": asset("assets/icons/abilities-nano-nano_shadow_pulse.png"),
        "ReturntoShadows": asset("assets/icons/abilities-nano-nano_shadow_pulse.png")
      }
    },
    "Grey Talon": {
      "icon": asset("assets/icons/heroes-archer_sm.png"),
      "abilities": {
        "Charged Shot": asset("assets/icons/abilities-archer-archer_charged_shot.png"),
        "ChargedShot": asset("assets/icons/abilities-archer-archer_charged_shot.png"),
        "Rain of Arrows": asset("assets/icons/abilities-archer-archer_power_jump.png"),
        "RainofArrows": asset("assets/icons/abilities-archer-archer_power_jump.png"),
        "Spirit Snare": asset("assets/icons/abilities-archer-imobolize_trap.png"),
        "SpiritSnare": asset("assets/icons/abilities-archer-imobolize_trap.png"),
        "Guided Owl": asset("assets/icons/abilities-archer-archer_guided_arrow.png"),
        "GuidedOwl": asset("assets/icons/abilities-archer-archer_guided_arrow.png")
      }
    },
    "Mo & Krill": {
      "icon": asset("assets/icons/heroes-digger_sm.png"),
      "abilities": {
        "Scorn": asset("assets/icons/abilities-grappler-grappler_regen.png"),
        "Burrow": asset("assets/icons/abilities-grappler-grappler_spin.png"),
        "Sand Blast": asset("assets/icons/abilities-grappler-grappler_throw_sand.png"),
        "SandBlast": asset("assets/icons/abilities-grappler-grappler_throw_sand.png"),
        "Combo": asset("assets/icons/abilities-grappler-grappler_combo.png")
      }
    },
    "Shiv": {
      "icon": asset("assets/icons/heroes-shiv_sm.png"),
      "abilities": {
        "Serrated Knives": asset("assets/icons/abilities-shiv-shiv_toss.png"),
        "SerratedKnives": asset("assets/icons/abilities-shiv-shiv_toss.png"),
        "Slice and Dice": asset("assets/icons/abilities-shiv-shiv_flash.png"),
        "SliceandDice": asset("assets/icons/abilities-shiv-shiv_flash.png"),
        "Bloodletting": asset("assets/icons/abilities-shiv-shiv_bloodletting.png"),
        "Killing Blow": asset("assets/icons/abilities-shiv-shiv_killing_blow.png"),
        "KillingBlow": asset("assets/icons/abilities-shiv-shiv_killing_blow.png")
      }
    },
    "Ivy": {
      "icon": asset("assets/icons/heroes-tengu_sm.png"),
      "abilities": {
        "Entangling Thorns": asset("assets/icons/abilities-tengu-tengu_storm_flask.png"),
        "EntanglingThorns": asset("assets/icons/abilities-tengu-tengu_storm_flask.png"),
        "Kudzu Connection": asset("assets/icons/abilities-tengu-tengu_tether.png"),
        "KudzuConnection": asset("assets/icons/abilities-tengu-tengu_tether.png"),
        "Stone Form": asset("assets/icons/abilities-tengu-tengu_stone_form.png"),
        "StoneForm": asset("assets/icons/abilities-tengu-tengu_stone_form.png"),
        "Air Drop": asset("assets/icons/abilities-tengu-tengu_lightning_crash.png"),
        "AirDrop": asset("assets/icons/abilities-tengu-tengu_lightning_crash.png")
      }
    },
    "Warden": {
      "icon": asset("assets/icons/heroes-warden_sm.png"),
      "abilities": {
        "Alchemical Flask": asset("assets/icons/abilities-warden-warden_crowd_control.png"),
        "AlchemicalFlask": asset("assets/icons/abilities-warden-warden_crowd_control.png"),
        "Willpower": asset("assets/icons/abilities-warden-warden_high_alert.png"),
        "Binding Word": asset("assets/icons/abilities-warden-warden_lock_down.png"),
        "BindingWord": asset("assets/icons/abilities-warden-warden_lock_down.png"),
        "Last Stand": asset("assets/icons/abilities-warden-warden_riot_protocol.png"),
        "LastStand": asset("assets/icons/abilities-warden-warden_riot_protocol.png")
      }
    },
    "Yamato": {
      "icon": asset("assets/icons/heroes-yamato_sm.png"),
      "abilities": {
        "Power Slash": asset("assets/icons/abilities-yamato-yamato_power_slash.png"),
        "PowerSlash": asset("assets/icons/abilities-yamato-yamato_power_slash.png"),
        "Flying Slash": asset("assets/icons/abilities-yamato-yamato_flying_strike.png"),
        "FlyingSlash": asset("assets/icons/abilities-yamato-yamato_flying_strike.png"),
        "Crimson Slash": asset("assets/icons/abilities-yamato-yamato_crimson_slash.png"),
        "CrimsonSlash": asset("assets/icons/abilities-yamato-yamato_crimson_slash.png"),
        "Shadow Transformation": asset("assets/icons/abilities-yamato-yamato_blinding_steel.png"),
        "ShadowTransformation": asset("assets/icons/abilities-yamato-yamato_blinding_steel.png")
      }
    },
    "Lash": {
      "icon": asset("assets/icons/heroes-lash_sm.png"),
      "abilities": {
        "Ground Strike": asset("assets/icons/abilities-lash-lash_death_slam.png"),
        "GroundStrike": asset("assets/icons/abilities-lash-lash_death_slam.png"),
        "Grapple": asset("assets/icons/abilities-lash-lash_lash.png"),
        "Flog": asset("assets/icons/abilities-lash-lash_flog.png"),
        "Death Slam": asset("assets/icons/abilities-lash-lash_counter_lash.png"),
        "DeathSlam": asset("assets/icons/abilities-lash-lash_counter_lash.png")
      }
    },
    "Viscous": {
      "icon": asset("assets/icons/heroes-viscous_sm.png"),
      "abilities": {
        "Splatter": asset("assets/icons/abilities-viscous-viscous_goo_ball.png"),
        "The Cube": asset("assets/icons/abilities-viscous-viscous_restorative_goo.png"),
        "TheCube": asset("assets/icons/abilities-viscous-viscous_restorative_goo.png"),
        "Puddle Punch": asset("assets/icons/abilities-viscous-viscous_goo_punch.png"),
        "PuddlePunch": asset("assets/icons/abilities-viscous-viscous_goo_punch.png"),
        "Goo Ball": asset("assets/icons/abilities-viscous-viscous_goo_sphere.png"),
        "GooBall": asset("assets/icons/abilities-viscous-viscous_goo_sphere.png")
      }
    },
    "Pocket": {
      "icon": asset("assets/icons/heroes-synth_sm.png"),
      "abilities": {
        "Barrage": asset("assets/icons/abilities-synth-synth_barrage.png"),
        "Flying Cloak": asset("assets/icons/abilities-synth-synth_plasma_flux.png"),
        "FlyingCloak": asset("assets/icons/abilities-synth-synth_plasma_flux.png"),
        "Enchanter's Satchel": asset("assets/icons/abilities-synth-synth_pulse.png"),
        "Enchanter'sSatchel": asset("assets/icons/abilities-synth-synth_pulse.png"),
        "Affliction": asset("assets/icons/abilities-synth-synth_affliction.png")
      }
    },
    "Mirage": {
      "icon": asset("assets/icons/heroes-mirage_sm.png"),
      "abilities": {
        "Fire Scarabs": asset("assets/icons/abilities-mirage-mirage_fire_beetles.png"),
        "FireScarabs": asset("assets/icons/abilities-mirage-mirage_fire_beetles.png"),
        "Dust Devil": asset("assets/icons/abilities-mirage-mirage_tornado.png"),
        "DustDevil": asset("assets/icons/abilities-mirage-mirage_tornado.png"),
        "Djinn's Mark": asset("assets/icons/abilities-mirage-mirage_sand_phantom.png"),
        "Djinn'sMark": asset("assets/icons/abilities-mirage-mirage_sand_phantom.png"),
        "Traveler": asset("assets/icons/abilities-mirage-mirage_teleport.png")
      }
    },
    "Vyper": {
      "icon": asset("assets/icons/heroes-kali_sm.png"),
      "abilities": {
        "Screwjab Dagger": asset("assets/icons/abilities-viper-viper_debuffdagger.png"),
        "ScrewjabDagger": asset("assets/icons/abilities-viper-viper_debuffdagger.png"),
        "Lethal Venom": asset("assets/icons/abilities-viper-viper_venom.png"),
        "LethalVenom": asset("assets/icons/abilities-viper-viper_venom.png"),
        "Slither": asset("assets/icons/abilities-viper-viper_snakedash.png"),
        "Petrifying Bola": asset("assets/icons/abilities-viper-viper_petrifybola.png"),
        "PetrifyingBola": asset("assets/icons/abilities-viper-viper_petrifybola.png")
      }
    },
    "Sinclair": {
      "icon": asset("assets/icons/heroes-magician_sm.png"),
      "abilities": {
        "Vexing Bolt": asset("assets/icons/abilities-magician-magician_magicbolt.png"),
        "VexingBolt": asset("assets/icons/abilities-magician-magician_magicbolt.png"),
        "Spectral Assistant": asset("assets/icons/abilities-magician-magician_cloneturret.png"),
        "SpectralAssistant": asset("assets/icons/abilities-magician-magician_cloneturret.png"),
        "Rabbit Hex": asset("assets/icons/abilities-magician-magician_animalcurse.png"),
        "RabbitHex": asset("assets/icons/abilities-magician-magician_animalcurse.png"),
        "Audience Participation": asset("assets/icons/abilities-magician-magician_copyult.png"),
        "AudienceParticipation": asset("assets/icons/abilities-magician-magician_copyult.png")
      }
    },
    "Mina": {
      "icon": asset("assets/icons/heroes-vampirebat_sm.png"),
      "abilities": {
        "Rake": asset("assets/icons/abilities-vampirebat-vampirebat_rake.png"),
        "Sanguine Retreat": asset("assets/icons/abilities-vampirebat-vampirebat_sanguine_retreat.png"),
        "SanguineRetreat": asset("assets/icons/abilities-vampirebat-vampirebat_sanguine_retreat.png"),
        "Love Bites": asset("assets/icons/abilities-vampirebat-vampirebat_love_bites.png"),
        "LoveBites": asset("assets/icons/abilities-vampirebat-vampirebat_love_bites.png"),
        "Nox Nostra": asset("assets/icons/abilities-vampirebat-vampirebat_nox_nostra.png"),
        "NoxNostra": asset("assets/icons/abilities-vampirebat-vampirebat_nox_nostra.png")
      }
    },
    "Drifter": {
      "icon": asset("assets/icons/heroes-drifter_sm.png"),
      "abilities": {
        "Rend": asset("assets/icons/abilities-drifter-drifter_claw.png"),
        "Stalker's Mark": asset("assets/icons/abilities-drifter-drifter_stalkersmark.png"),
        "Stalker'sMark": asset("assets/icons/abilities-drifter-drifter_stalkersmark.png"),
        "Bloodscent": asset("assets/icons/abilities-drifter-drifter_thehunger.png"),
        "Eternal Night": asset("assets/icons/abilities-drifter-darkness.png"),
        "EternalNight": asset("assets/icons/abilities-drifter-darkness.png")
      }
    },
    "Venator": {
      "icon": asset("assets/icons/heroes-priest_sm.png"),
      "abilities": {
        "Consecrating Grenade": asset("assets/icons/abilities-priest-priest_grenade.png"),
        "ConsecratingGrenade": asset("assets/icons/abilities-priest-priest_grenade.png"),
        "Gutshot": asset("assets/icons/abilities-priest-priest_shotgun.png"),
        "Hex-Lined Snap Trap": asset("assets/icons/abilities-priest-priest_trap.png"),
        "Hex-LinedSnapTrap": asset("assets/icons/abilities-priest-priest_trap.png"),
        "Ira Domini": asset("assets/icons/abilities-priest-priest_crossbow.png"),
        "IraDomini": asset("assets/icons/abilities-priest-priest_crossbow.png")
      }
    },
    "Victor": {
      "icon": asset("assets/icons/heroes-frank_sm.png"),
      "abilities": {
        "Pain Battery": asset("assets/icons/abilities-frank-frank_pain_battery.png"),
        "PainBattery": asset("assets/icons/abilities-frank-frank_pain_battery.png"),
        "Jumpstart": asset("assets/icons/abilities-frank-frank_jump_start.png"),
        "Aura of Suffering": asset("assets/icons/abilities-frank-frank_aura_of_suffering.png"),
        "AuraofSuffering": asset("assets/icons/abilities-frank-frank_aura_of_suffering.png"),
        "Shocking Reanimation": asset("assets/icons/abilities-frank-frank_shocking_reanimation.png"),
        "ShockingReanimation": asset("assets/icons/abilities-frank-frank_shocking_reanimation.png")
      }
    },
    "Paige": {
      "icon": asset("assets/icons/heroes-bookworm_sm.png"),
      "abilities": {
        "Bookwyrm": asset("assets/icons/abilities-bookworm-bookworm_dragon.png"),
        "Plot Armor": asset("assets/icons/abilities-bookworm-bookworm_defendandfight.png"),
        "PlotArmor": asset("assets/icons/abilities-bookworm-bookworm_defendandfight.png"),
        "Captivating Read": asset("assets/icons/abilities-bookworm-bookworm_blindinglight.png"),
        "CaptivatingRead": asset("assets/icons/abilities-bookworm-bookworm_blindinglight.png"),
        "Rallying Charge": asset("assets/icons/abilities-bookworm-bookworm_charge.png"),
        "RallyingCharge": asset("assets/icons/abilities-bookworm-bookworm_charge.png")
      }
    },
    "The Doorman": {
      "icon": asset("assets/icons/heroes-doorman_sm.png"),
      "abilities": {
        "Call Bell": asset("assets/icons/abilities-doorman-doorman_bell.png"),
        "CallBell": asset("assets/icons/abilities-doorman-doorman_bell.png"),
        "Doorway": asset("assets/icons/abilities-doorman-doorman_doorway.png"),
        "Luggage Cart": asset("assets/icons/abilities-doorman-doorman_luggagetrolley.png"),
        "LuggageCart": asset("assets/icons/abilities-doorman-doorman_luggagetrolley.png"),
        "Hotel Guest": asset("assets/icons/abilities-doorman-doorman_elevator.png"),
        "HotelGuest": asset("assets/icons/abilities-doorman-doorman_elevator.png")
      }
    },
    "Doorman": {
      "icon": asset("assets/icons/heroes-doorman_sm.png"),
      "abilities": {
        "Call Bell": asset("assets/icons/abilities-doorman-doorman_bell.png"),
        "CallBell": asset("assets/icons/abilities-doorman-doorman_bell.png"),
        "Doorway": asset("assets/icons/abilities-doorman-doorman_doorway.png"),
        "Luggage Cart": asset("assets/icons/abilities-doorman-doorman_luggagetrolley.png"),
        "LuggageCart": asset("assets/icons/abilities-doorman-doorman_luggagetrolley.png"),
        "Hotel Guest": asset("assets/icons/abilities-doorman-doorman_elevator.png"),
        "HotelGuest": asset("assets/icons/abilities-doorman-doorman_elevator.png")
      }
    },
    "Billy": {
      "icon": asset("assets/icons/heroes-punkgoat_sm.png"),
      "abilities": {
        "Bashdown": asset("assets/icons/abilities-punkgoat-goat_sigilslam.png"),
        "Rising Ram": asset("assets/icons/abilities-punkgoat-goat_risingram.png"),
        "RisingRam": asset("assets/icons/abilities-punkgoat-goat_risingram.png"),
        "Blasted": asset("assets/icons/abilities-punkgoat-goat_blasted.png"),
        "Chain Gang": asset("assets/icons/abilities-punkgoat-goat_chaingang.png"),
        "ChainGang": asset("assets/icons/abilities-punkgoat-goat_chaingang.png")
      }
    },
    "Graves": {
      "icon": asset("assets/icons/heroes-necro_sm.png"),
      "abilities": {
        "Jar of Dead": asset("assets/icons/abilities-necro-necro_skull.png"),
        "JarofDead": asset("assets/icons/abilities-necro-necro_skull.png"),
        "Grasping Hands": asset("assets/icons/abilities-necro-necro_hands.png"),
        "GraspingHands": asset("assets/icons/abilities-necro-necro_hands.png"),
        "Essence Theft": asset("assets/icons/abilities-necro-necro_siphon.png"),
        "EssenceTheft": asset("assets/icons/abilities-necro-necro_siphon.png"),
        "Borrowed Decree": asset("assets/icons/abilities-necro-necro_gravestone.png"),
        "BorrowedDecree": asset("assets/icons/abilities-necro-necro_gravestone.png")
      }
    },
    "Apollo": {
      "icon": asset("assets/icons/heroes-fencer_sm.png"),
      "abilities": {
        "Disengaging Sigil": asset("assets/icons/abilities-fencer-fencer_sigil.png"),
        "DisengagingSigil": asset("assets/icons/abilities-fencer-fencer_sigil.png"),
        "Riposte": asset("assets/icons/abilities-fencer-fencer_riposte.png"),
        "Flawless Advance": asset("assets/icons/abilities-fencer-fencer_lungingstab.png"),
        "FlawlessAdvance": asset("assets/icons/abilities-fencer-fencer_lungingstab.png"),
        "Itani Lo Sahn": asset("assets/icons/abilities-fencer-fencer_ult.png"),
        "ItaniLoSahn": asset("assets/icons/abilities-fencer-fencer_ult.png")
      }
    },
    "Rem": {
      "icon": asset("assets/icons/heroes-familiar_sm.png"),
      "abilities": {
        "Pillow Toss": asset("assets/icons/abilities-familiar-familiar_pillow.png"),
        "PillowToss": asset("assets/icons/abilities-familiar-familiar_pillow.png"),
        "Tag Along": asset("assets/icons/abilities-familiar-familiar_tag_along.png"),
        "TagAlong": asset("assets/icons/abilities-familiar-familiar_tag_along.png"),
        "Lil Helpers": asset("assets/icons/abilities-familiar-familiar_helpers.png"),
        "LilHelpers": asset("assets/icons/abilities-familiar-familiar_helpers.png"),
        "Naptime": asset("assets/icons/abilities-familiar-familiar_sleep.png")
      }
    },
    "Silver": {
      "icon": asset("assets/icons/heroes-werewolf_sm.png"),
      "abilities": {
        "Slam Fire": asset("assets/icons/abilities-werewolf-werewolf_slamfire.png"),
        "SlamFire": asset("assets/icons/abilities-werewolf-werewolf_slamfire.png"),
        "Boot Kick": asset("assets/icons/abilities-werewolf-werewolf_jumpback.png"),
        "BootKick": asset("assets/icons/abilities-werewolf-werewolf_jumpback.png"),
        "Entangling Bola": asset("assets/icons/abilities-werewolf-werewolf_bola.png"),
        "EntanglingBola": asset("assets/icons/abilities-werewolf-werewolf_bola.png"),
        "Lycan Curse": asset("assets/icons/abilities-werewolf-werewolf_lycancurse.png"),
        "LycanCurse": asset("assets/icons/abilities-werewolf-werewolf_lycancurse.png")
      }
    },
    "Celeste": {
      "icon": asset("assets/icons/heroes-unicorn_sm.png"),
      "abilities": {
        "Light Eater": asset("assets/icons/abilities-unicorn-unicorn_flare.png"),
        "LightEater": asset("assets/icons/abilities-unicorn-unicorn_flare.png"),
        "Dazzling Trick": asset("assets/icons/abilities-unicorn-unicorn_shield.png"),
        "DazzlingTrick": asset("assets/icons/abilities-unicorn-unicorn_shield.png"),
        "Radiant Daggers": asset("assets/icons/abilities-unicorn-unicorn_luminousflux.png"),
        "RadiantDaggers": asset("assets/icons/abilities-unicorn-unicorn_luminousflux.png"),
        "Shining Wonder": asset("assets/icons/abilities-unicorn-unicorn_orb.png"),
        "ShiningWonder": asset("assets/icons/abilities-unicorn-unicorn_orb.png")
      }
    }
  },
  "items": {
    "Extended Magazine": asset("assets/icons/items-weapon-basic_magazine.png"),
    "Monster Rounds": asset("assets/icons/items-weapon-monster_rounds.png"),
    "Cultist Sacrifice": asset("assets/icons/items-weapon-cultist_sacrifice.png"),
    "Tesla Bullets": asset("assets/icons/items-weapon-tesla_bullets.png"),
    "Capacitor": asset("assets/icons/items-weapon-capacitor.png"),
    "Hollow Point": asset("assets/icons/items-weapon-hollow_point.png"),
    "Opening Rounds": asset("assets/icons/items-weapon-opening_rounds.png"),
    "High-Velocity Rounds": asset("assets/icons/items-weapon-high_velocity_rounds.png"),
    "Melee Lifesteal": asset("assets/icons/items-vitality-melee_lifesteal.png"),
    "Rebuttal": asset("assets/icons/items-vitality-rebuttal.png"),
    "Counterspell": asset("assets/icons/items-vitality-counterspell.png"),
    "Weighted Shots": asset("assets/icons/items-weapon-weighted_shots.png"),
    "Close Quarters": asset("assets/icons/items-weapon-close_quarters.png"),
    "Long Range": asset("assets/icons/items-weapon-long_range.png"),
    "Slowing Bullets": asset("assets/icons/items-weapon-slowing_bullets.png"),
    "Inhibitor": asset("assets/icons/items-vitality-inhibitor.png"),
    "Spirit Shredder Bullets": asset("assets/icons/items-weapon-spirit_shredder_bullets.png"),
    "Heroic Aura": asset("assets/icons/items-weapon-heroic_aura.png"),
    "Silence Wave": asset("assets/icons/items-spirit-silence_glyph.png"),
    "Silencer": asset("assets/icons/items-weapon-silencer.png"),
    "Berserker": asset("assets/icons/items-weapon-berserker.png"),
    "Frenzy": asset("assets/icons/items-weapon-frenzy.png"),
    "Siphon Bullets": asset("assets/icons/items-vitality-siphon_bullets.png"),
    "Headshot Booster": asset("assets/icons/items-weapon-headshot_booster.png"),
    "Weakening Headshot": asset("assets/icons/items-weapon-weakening_headshot.png"),
    "Sharpshooter": asset("assets/icons/items-weapon-sharp_shooter.png"),
    "Headhunter": asset("assets/icons/items-weapon-headhunter.png"),
    "Spirit Rend": asset("assets/icons/items-weapon-spellslinger_headshots.png"),
    "Crippling Headshot": asset("assets/icons/items-weapon-crippling_headshot.png"),
    "Mystic Shot": asset("assets/icons/items-weapon-mystic_shot.png"),
    "Lucky Shot": asset("assets/icons/items-weapon-lucky_shot.png"),
    "Point Blank": asset("assets/icons/items-weapon-point_blank.png"),
    "Toxic Bullets": asset("assets/icons/items-weapon-toxic_bullets.png"),
    "Ricochet": asset("assets/icons/items-weapon-ricochet.png"),
    "Extra Health": asset("assets/icons/items-vitality-extra_health.png"),
    "Bullet Lifesteal": asset("assets/icons/items-vitality-bullet_lifesteal.png"),
    "Debuff Reducer": asset("assets/icons/items-vitality-debuff_reducer.png"),
    "Dispel Magic": asset("assets/icons/items-vitality-debuff_remover.png"),
    "Spirit Resilience": asset("assets/icons/items-vitality-spirit_resilience.png"),
    "Bullet Resilience": asset("assets/icons/items-vitality-bullet_resilience.png"),
    "Metal Skin": asset("assets/icons/items-vitality-metal_skin.png"),
    "Healing Booster": asset("assets/icons/items-vitality-healing_booster.png"),
    "Fortitude": asset("assets/icons/items-vitality-fortitude.png"),
    "Leech": asset("assets/icons/items-vitality-leech.png"),
    "Sprint Boots": asset("assets/icons/items-vitality-sprint_boots.png"),
    "Trophy Collector": asset("assets/icons/items-vitality-trophy_collector.png"),
    "Enduring Speed": asset("assets/icons/items-vitality-enduring_speed.png"),
    "Stamina Mastery": asset("assets/icons/items-vitality-stamina_mastery.png"),
    "Rapid Rounds": asset("assets/icons/items-weapon-rapid_rounds.png"),
    "Extra Stamina": asset("assets/icons/items-vitality-extra_stamina.png"),
    "Hunter's Aura": asset("assets/icons/items-weapon-hunters_aura.png"),
    "Grit": asset("assets/icons/items-vitality-grit.png"),
    "Weapon Shielding": asset("assets/icons/items-vitality-weapon_shielding.png"),
    "Spirit Shielding": asset("assets/icons/items-vitality-spirit_shielding.png"),
    "Battle Vest": asset("assets/icons/items-vitality-battle_vest.png"),
    "Enchanter's Emblem": asset("assets/icons/items-vitality-enchanters_emblem.png"),
    "Extra Spirit": asset("assets/icons/items-spirit-extra_spirit.png"),
    "Mystic Regeneration": asset("assets/icons/items-spirit-mystic_regen.png"),
    "Improved Spirit": asset("assets/icons/items-spirit-improved_spirit.png"),
    "Spiritual Overflow": asset("assets/icons/items-weapon-spiritual_overflow.png"),
    "Return Fire": asset("assets/icons/items-vitality-return_fire.png"),
    "Greater Expansion": asset("assets/icons/items-spirit-greater_expansion.png"),
    "Mystic Expansion": asset("assets/icons/items-spirit-mystic_reach.png"),
    "Extra Charge": asset("assets/icons/items-spirit-extra_charge.png"),
    "Spirit Lifesteal": asset("assets/icons/items-vitality-spirit_lifesteal.png"),
    "Bullet Resist Shredder": asset("assets/icons/items-spirit-bullet_resist_shredder.png"),
    "Mystic Reverb": asset("assets/icons/items-spirit-mystic_reverb.png"),
    "Mystic Burst": asset("assets/icons/items-spirit-mystic_burst.png"),
    "Tankbuster": asset("assets/icons/items-spirit-tankbuster.png"),
    "Mystic Vulnerability": asset("assets/icons/items-spirit-mystic_vulnerability.png"),
    "Healbane": asset("assets/icons/items-vitality-healbane.png"),
    "Mystic Slow": asset("assets/icons/items-spirit-mystic_slow.png"),
    "Escalating Exposure": asset("assets/icons/items-spirit-escalating_exposure.png"),
    "Rapid Recharge": asset("assets/icons/items-spirit-rapid_recharge.png"),
    "Omnicharge Signet": asset("assets/icons/items-brawl-omnicharge_pendant.png"),
    "Compress Cooldown": asset("assets/icons/items-spirit-improved_cooldown.png"),
    "Superior Cooldown": asset("assets/icons/items-spirit-superior_cooldown.png"),
    "Transcendent Cooldown": asset("assets/icons/items-spirit-transcendent_cooldown.png"),
    "Slowing Hex": asset("assets/icons/items-spirit-slowing_hex.png"),
    "Spirit Sap": asset("assets/icons/items-spirit-spirit_sap.png"),
    "Focus Lens": asset("assets/icons/items-spirit-focus_lens.png"),
    "Rusted Barrel": asset("assets/icons/items-spirit-rusted_barrel.png"),
    "Disarming Hex": asset("assets/icons/items-spirit-disarming_hex.png"),
    "Rescue Beam": asset("assets/icons/items-vitality-rescue_beam.png"),
    "Decay": asset("assets/icons/items-spirit-decay.png"),
    "Scourge": asset("assets/icons/items-spirit-scourge.png"),
    "Knockdown": asset("assets/icons/items-spirit-knockdown.png"),
    "Phantom Strike": asset("assets/icons/items-vitality-phantom_strike.png"),
    "Warp Stone": asset("assets/icons/items-vitality-warp_stone.png"),
    "Vortex Web": asset("assets/icons/items-spirit-vortex_web.png"),
    "Refresher": asset("assets/icons/items-spirit-refresher.png"),
    "Echo Shard": asset("assets/icons/items-spirit-echo_shard.png"),
    "Torment Pulse": asset("assets/icons/items-spirit-torment_pulse.png"),
    "Cheat Death": asset("assets/icons/items-vitality-cheat_death.png"),
    "Shadow Weave": asset("assets/icons/items-weapon-shadow_weave.png"),
    "Majestic Leap": asset("assets/icons/items-vitality-majestic_leap.png"),
    "Healing Nova": asset("assets/icons/items-vitality-healing_nova.png"),
    "Restorative Locket": asset("assets/icons/items-vitality-restorative_locket.png"),
    "Healing Rite": asset("assets/icons/items-vitality-healing_rite.png"),
    "Shrink Ray": asset("assets/icons/items-brawl-shrink_ray.png"),
    "Infuser": asset("assets/icons/items-vitality-infuser.png"),
    "Guardian Ward": asset("assets/icons/items-vitality-guardian_ward.png"),
    "Divine Barrier": asset("assets/icons/items-vitality-divine_barrier.png"),
    "Alchemical Fire": asset("assets/icons/items-weapon-alchemical_fire.png"),
    "Blood Tribute": asset("assets/icons/items-weapon-blood_tribute.png"),
    "Fleetfoot": asset("assets/icons/items-weapon-fleetfoot.png"),
    "Kinetic Dash": asset("assets/icons/items-weapon-kinetic_dash.png"),
    "Arcane Surge": asset("assets/icons/items-spirit-arcane_surge.png"),
    "Unstoppable": asset("assets/icons/items-vitality-unstoppable.png"),
    "Colossus": asset("assets/icons/items-vitality-colossus.png"),
    "Cold Front": asset("assets/icons/items-spirit-cold_front.png"),
    "Arctic Blast": asset("assets/icons/items-spirit-arctic_blast.png"),
    "Ethereal Shift": asset("assets/icons/items-spirit-ethereal_shift.png"),
    "Cursed Relic": asset("assets/icons/items-spirit-curse.png"),
    "Duration Extender": asset("assets/icons/items-spirit-duration_extender.png"),
    "Superior Duration": asset("assets/icons/items-spirit-superior_duration.png"),
    "Glass Cannon": asset("assets/icons/items-weapon-glass_cannon.png"),
    "Fury Trance": asset("assets/icons/items-vitality-fury_trance.png"),
    "Vampiric Burst": asset("assets/icons/items-vitality-vampiric_burst.png"),
    "Lifestrike": asset("assets/icons/items-vitality-lifestrike.png"),
    "Spirit Strike": asset("assets/icons/items-spirit-spirit_strike.png"),
    "Spirit Snatch": asset("assets/icons/items-spirit-spirit_snatch.png"),
    "Melee Charge": asset("assets/icons/items-weapon-melee_charge.png"),
    "Crushing Fists": asset("assets/icons/items-weapon-crushing_fists.png"),
    "Diviner's Kevlar": asset("assets/icons/items-vitality-diviners_kevlar.png"),
    "Radiant Regeneration": asset("assets/icons/items-spirit-radiant_regeneration.png"),
    "Boundless Spirit": asset("assets/icons/items-spirit-boundless_spirit.png"),
    "Burst Fire": asset("assets/icons/items-weapon-burst_fire.png"),
    "Extra Regen": asset("assets/icons/items-vitality-extra_regen.png"),
    "Surge of Power": asset("assets/icons/items-spirit-surge_of_power.png"),
    "Suppressor": asset("assets/icons/items-spirit-suppressor.png"),
    "Quicksilver Reload": asset("assets/icons/items-spirit-quicksilver_reload.png"),
    "Mercurial Magnum": asset("assets/icons/items-spirit-mercurial_magnum.png"),
    "Intensifying Magazine": asset("assets/icons/items-weapon-intensifying_magazine.png"),
    "Escalating Resilience": asset("assets/icons/items-weapon-escalating_resilience.png"),
    "Swift Striker": asset("assets/icons/items-weapon-swift_striker.png"),
    "Veil Walker": asset("assets/icons/items-vitality-veil_walker.png"),
    "Reactive Barrier": asset("assets/icons/items-vitality-reactive_barrier.png"),
    "Indomitable": asset("assets/icons/items-vitality-indomitable.png"),
    "Restorative Shot": asset("assets/icons/items-weapon-restorative_shot.png"),
    "Titanic Magazine": asset("assets/icons/items-weapon-titanic_magazine.png"),
    "Split Shot": asset("assets/icons/items-weapon-split_shot.png"),
    "Active Reload": asset("assets/icons/items-weapon-active_reload.png"),
    "Magic Carpet": asset("assets/icons/items-spirit-magic_carpet.png"),
    "Spirit Burn": asset("assets/icons/items-spirit-spirit_burn.png"),
    "Lightning Scroll": asset("assets/icons/items-spirit-lightning_scroll.png"),
    "Witchmail": asset("assets/icons/items-vitality-witchmail.png"),
    "Healing Tempo": asset("assets/icons/items-vitality-healing_tempo.png"),
    "Armor Piercing Rounds": asset("assets/icons/items-weapon-armor_piercing_rounds.png"),
    "Infinite Rounds": asset("assets/icons/items-brawl-infinite_rounds.png"),
    "Plated Armor": asset("assets/icons/items-vitality-plated_armor.png"),
    "Spellbreaker": asset("assets/icons/items-vitality-spellbreaker.png"),
    "Juggernaut": asset("assets/icons/items-vitality-juggernaut.png"),
    "Spellslinger": asset("assets/icons/items-weapon-spell_slinger.png"),
    "Stalker": asset("assets/icons/items-weapon-backstabber.png"),
    "Express Shot": asset("assets/icons/items-weapon-express_shot.png"),
    "Seraphim Wings": asset("assets/icons/items-brawl-icarus_wings.png"),
    "Mystical Piano": asset("assets/icons/items-brawl-mystical_piano.png"),
    "Nullification Burst": asset("assets/icons/items-brawl-nullification_aura.png"),
    "Celestial Blessing": asset("assets/icons/items-brawl-celestial_guidance.png"),
    "Eternal Gift": asset("assets/icons/items-brawl-eternal_gift.png"),
    "Mystic Conduit": asset("assets/icons/items-brawl-patrons_blessing.png"),
    "Haunting Shot": asset("assets/icons/items-brawl-eldritch_shot.png"),
    "Cloak of Opportunity": asset("assets/icons/items-brawl-cloak_of_opportunity.png"),
    "Runed Gauntlets": asset("assets/icons/items-brawl-runed_gauntlets.png"),
    "Electric Slippers": asset("assets/icons/items-brawl-electric_slippers.png"),
    "Prism Blast": asset("assets/icons/items-brawl-prism_blast.png"),
    "Unstable Concoction": asset("assets/icons/items-brawl-unstable_concoction.png"),
    "Frostbite Charm": asset("assets/icons/items-brawl-frostbite.png"),
    "Shadow Strike": asset("assets/icons/items-brawl-shadow_strike.png"),
    "Ballistic Enchantment": asset("assets/icons/items-weapon-alchemical_seal.png"),
    "Recharging Rush": asset("assets/icons/items-weapon-recharging_rounds.png"),
    "Golden Goose Egg": asset("assets/icons/items-spirit-goose_egg.png")
  }
};
})();
