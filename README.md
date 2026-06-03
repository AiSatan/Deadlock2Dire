> [!NOTE]
> Deadlock2Dire is an unofficial fan-made project and is not affiliated with, associated with, endorsed by, or sponsored by Valve or Deadlock.

# Deadlock2Dire

Brower extension for rendering Deadlock patch notes in a Dota2-style layout. (Alternative version of [https://github.com/AiSatan/PoE2Dire](https://github.com/AiSatan/PoE2Dire))

It's not perfect, but neither am I.

<img width="1191" height="1016" alt="image" src="https://github.com/user-attachments/assets/4f737f71-904a-47ae-9663-7af5917508f7" />
<img width="1192" height="965" alt="image" src="https://github.com/user-attachments/assets/c621f3a6-d762-494e-bfd0-492c62fe8a93" />


The extension only injects on:

```text
https://forums.playdeadlock.com/threads/*
https://forums.playdeadlock.com/forums/changelog.10/*
```

## How to use?

0. Install with instructions below
1. Go to any Deadlock patch notes forum page ([for example this one](https://forums.playdeadlock.com/threads/01-30-2026-update.102822/))
2. Click the Deadlock2Dire icon to activate it.
3. Done.
4. You can click it again to deactivate, or simply reload.

## Install options

### Install on Chrome

[Chrome WebStore](https://chromewebstore.google.com/detail/deadlock2dire/ljceclmobnnldiilefjpgcbaiaeoopnh?authuser=0&hl=en)

### Install on Firefox

[Firefox Browser Add-ons Page](https://addons.mozilla.org/en-US/firefox/addon/deadlock2dire/)

### Install as a userscript

> [!CAUTION]
> This is for people who know what userscripts are.

Download the `Deadlock2Dire.user.js` script from the GitHub Releases page. Here's a video example for ViolentMonkey (just use `Deadlock2Dire.user.js` file from the release page instead of the `PoE2Dire.user.json`): [https://www.youtube.com/watch?v=cgWVGSAxoEY](https://www.youtube.com/watch?v=cgWVGSAxoEY)

In short, it goes like this:

1. Download the `Deadlock2Dire.user.js` release asset.
2. Open the `Deadlock2Dire.user.js` release asset.
3. Install it in your userscript manager.
4. On a Deadlock forum patch notes page, use the userscript manager menu and click `Toggle Deadlock2Dire`.

### Do you guys have phones?

This is for phones or browsers where you cannot/don't want to install the extension.

> [!NOTE]
> Some mobile browsers can block bookmarklet scripts, so this may not work for everyone.

> [!CAUTION]
> This will download the remote code (`https://aisatan.github.io/Deadlock2Dire/Deadlock2Dire-bookmarklet.js`) and **execute** it with your browser.
> It's not required, but I **strongly suggest** staying safe and using **incognito mode**.

The phone bookmarklet loads the published single-file build from GitHub Pages:

```js
javascript:(function(){var s=document.createElement('script');s.src='https://aisatan.github.io/Deadlock2Dire/Deadlock2Dire-bookmarklet.js?deadlock2dire=' + Date.now();s.referrerPolicy='no-referrer';s.onerror=function(){alert('Deadlock2Dire failed to load. The page may block bookmarklet scripts.');};document.documentElement.appendChild(s);})();
```

How to use it:

1. Create a browser bookmark.
2. Edit the bookmark URL and name.
3. Paste the full `javascript:` code above as the bookmark URL.
4. Put some easy accessible name, like `0000 deadlock2dire`.
5. Open a Deadlock forum patch notes page.
6. Run the bookmark.

## Not working for you?

Feel free to open an issue on GitHub. I will do my best to fix it for you, but no promises.

## Contribution

Please, feel free to ask a question, open PR, issue, or fork it if you want.
It lacks documentation, but messy JS code should be clear enough to follow.
But, keep in mind, my decades of writing hacky JS code might feel strange, cause I never actually used it to make a proper project, only scripts with jQuery.

## Support

Please, consider any of these little support options:

⭐ Leave a GitHub Star ⭐

☕ [Buy me a coffee <3](https://buymeacoffee.com/aisatan) ☕

<img width="32" height="32" alt="blender_emoji_transparent_32" src="https://github.com/user-attachments/assets/02ac03f9-3dd0-4674-8ea2-03b38e0e1f81" />[Donate to Blender Foundation](https://fund.blender.org/donate-once/)
<img width="32" height="32" alt="blender_emoji_transparent_32" src="https://github.com/user-attachments/assets/1e6fa180-211d-4658-9b4f-c549a336a75e" />




## Asset Notice

Deadlock2Dire is an unofficial, non-commercial fan project and is not affiliated with or endorsed by Valve.

Deadlock, Valve, and all Deadlock game artwork, icons, hero images, item images, and ability images are trademarks/copyrights of Valve.

Bundled icons in `src/assets/icons/` were sourced from the Deadlock API static asset bucket:
https://assets-bucket.deadlock-api.com/assets-api-res/images/

The related Deadlock API assets project is:
https://github.com/deadlock-api/deadlock-api-assets

That project is MIT licensed, but the underlying Deadlock artwork remains Valve game content. These assets are included only for identification/display inside this fan patch-notes formatter.

The project code is licensed under the MIT License. Bundled Deadlock game assets under `src/assets/icons/` are excluded from that license.

If you own rights to any included asset and want it removed, open an issue or contact the maintainer.
