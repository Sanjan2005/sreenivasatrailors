<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep shared navigation and footer in the root shell and named content in distinct leaf routes so every destination is directly accessible.
- Reuse homepage sections from `src/components/site` across content routes to maintain a consistent experience.
- Keep supplied business facts and time-zone-aware hours logic in `src/lib/business.ts` with concrete tests; incomplete schedules must not produce an Open Now claim.
- All visual styling uses semantic tokens and global design-system classes in `src/styles.css` to keep the atelier appearance consistent.
