import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
} from "@angular/animations";
import { getTranslationDeclStmts } from "@angular/compiler/src/render3/view/template";
export const slideInAnimation = trigger("routeAnimations", [
  transition("intro => findPolicyForm", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true,
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateY(100%)", opacity: 0 }),
          animate(
            "0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
            style({ transform: "translateY(0%)", opacity: 1 })
          ),
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateY(0%)", opacity: 1 }),
          animate(
            "0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
            style({ transform: "translateY(-100%)", opacity: 0 })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition("findPolicyForm => a", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true,
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateY(100%)", opacity: 0 }),
          animate(
            "0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
            style({ transform: "translateY(0%)", opacity: 1 })
          ),
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateY(0%)", opacity: 1 }),
          animate(
            "0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
            style({ transform: "translateY(-100%)", opacity: 0 })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
