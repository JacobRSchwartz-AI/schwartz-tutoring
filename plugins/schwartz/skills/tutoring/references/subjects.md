# Subject playbooks

Companion to [../SKILL.md](../SKILL.md). Read the section for the subject you are about to tutor. The moves in SKILL.md section 3 apply everywhere; this file holds the subject-specific tricks, orders of teaching and traps. Analogies by subject are in [analogies.md](analogies.md).

---

## Statistics

**Foundations**
- **Two worlds.** Population vs sample, parameter vs statistic, Greek vs Latin letters. "All of your hypotheses are going to be in the population world." [Statistics_2023-10-08_15-00-04.txt @ 00:01:12]. Why a hypothesis can't be about a sample: "there's no reason to do a hypothesis test on a sample mean. Because if you have a sample, you just calculate the mean, and you have the sample mean." [Statistics_2023-11-01_14-00-10.txt @ 00:06:10]. Watch look-alike vocabulary: "The .005 is the value. The .05 is the level." [Statistics_2023-12-06 12-45-01.txt @ 00:34:12]
- **Variable types first.** Categorical vs quantitative decides almost everything. Look at the actual data columns before choosing a method. "So it's important to be able to look and see the actual data." [Statistics_2023-12-04 14-06-13.txt @ 00:09:07]. Trap: a number that is really a yes/no. "oh, you think age, number, boom, easy. Yes, typically, but in this case, they just said young, yes or no, and when it's yes or no, it's categorical." [Statistics_2023-12-03 19-58-56.txt @ 00:05:57]
- **Mean vs proportion.** "Means are average of quantitative variables." / "Proportion is like, what fraction of people say yes to a yes or no?" [Statistics_2023-10-08_15-00-04.txt @ 00:03:52 and 00:04:29]. "Average" is a synonym for mean; a proportion stays between 0 and 1, so an axis for proportions that runs past 1 is a red flag.
- **Spread and skew.** Standard deviation as spread with a test-score example; show the mean is sensitive to outliers by cranking one value (21 to 210).
- **Sampling and design.** Stratified takes some from every group, cluster takes everyone from a few groups (dorms). Name the experimental unit (in a family study, the household). To decide observational vs experiment, imagine running it as an experiment: "And so it's like, imagine that as an experiment. Alright, 10 of you, a fee. 10 of you, no friends. Okay, that's a bit extreme, right?" [Statistics_2023-10-04_16-09-46.txt @ 00:01:27]. Good designs take a baseline, randomize and compare changes, not endings: "If I go from 700 to 910 versus 600 to 810, that's actually about the same." [Statistics_2023-12-04 21-14-52.txt @ 00:23:42]

**Probability**
- **Probability order.** Venn diagram, then two-way table, then conditional probability; the denominator depends on what is given. Test independence two ways (P(A and B) vs P(A)P(B), and P(A|B) vs P(A)). Avoid double counting: "The way that you avoid double counting is by subtracting it out once." [Statistics_2023-09-27_14-02-39.txt @ 00:49:08]
- **"And" vs "given"** with a life example: the probability you pass given you study vs the probability you pass and study.
- **Complement as "not."** "to be greater than 7, that is the equivalent of saying I am not 0, 1, 2, 3, 4, 5, 6, or 7." [Statistics_2023-11-10 10-00-30.txt @ 01:01:53]. Trap: "Don't add these x's together. The probability function is being applied to them." [Statistics_2023-11-10 10-00-30.txt @ 00:41:03]
- **Trees.** Multiply down the branches; branch sums must match the parent. "Since the first person said red, there's no getting off that branch." [Statistics_2023-11-14 14-01-53.txt @ 00:41:59]
- **Binomial.** Identify n, p, x. PDF is "exactly," CDF is "at most." "No more than 7" includes 7; "more than 14" is 1 minus CDF(14). Teach the formula, then the keystrokes, then connect them. Stress-test the four conditions on a vivid story: "You don't go in and say, I'm going to throw 50 punches this round." [Statistics_2023-09-27_14-02-39.txt @ 00:52:30]. Lay binomial and geometric side by side with the one differing condition highlighted.
- **Uniform distribution.** Total area 1 fixes the height; then every probability is a rectangle.

**Normal distributions and sampling distributions**
- **z-scores from the student's own sport.** Ask for 1, 2 and 3 SDs above and below, then go backward, then a non-integer, then motivate dividing by the SD: "Because if you had a big standard deviation, 2 seconds might not be that much, right? If you were doing a 1,500 meter, 2 seconds might be nothing." [Statistics_2023-11-04 14-30-34.txt @ 00:39:35]
- **Tables.** Ask which table the class uses and read its picture. "So, if they give you area to the left, and you want area to the right, you just do 1 minus the area to the left." [Statistics_2023-11-04 14-30-34.txt @ 01:01:21]. Use symmetry instead of extra lookups: "So the area to the right of 2 will be the same as the area to the left of negative 2." [Statistics_2023-10-06_12-00-31.txt @ 00:05:18]. Rebuild the empirical-rule bands from the totals with symmetry and the complement.
- **Percentiles flip the direction:** the probability is given and x is the unknown. The 75th percentile is a left-area cutoff, not "the middle 75 percent."
- **Check the model.** "Can you think of a problem with using a normal distribution for this?" [Statistics_2023-10-11_14-02-36.txt @ 00:26:30] (app counts are discrete; hours are continuous). If p is so close to 1 that three SDs run past 1, use the binomial instead of the normal approximation.
- **Individual vs sample.** Simulate with random numbers, count, repeat, then change p. Identify X, name the distribution, decide whether the question is about one individual or a sample mean, and divide by root n only for the sample. The sample mean keeps its center while its spread shrinks: average three people's heights and you don't get a 3-foot average.
- **Don't round in the middle.** "I would do 5 divided by square root of 35 so you don't round and don't lose any decimals." [Statistics_2023-10-11_14-02-36.txt @ 00:29:00]
- **Sample size for a proportion.** One equation cannot solve two unknowns, so use p = 0.5 (where p(1-p) peaks) and always round up (you can't ship 1.3 trucks). "it is simply one variable equation to solve. Now it's back to algebra." [Statistics_2023-10-08_10-01-36.txt @ 00:08:00]

**Inference**
- **Hypothesis testing.** Say the p-value definition like a mantra: "Given the null hypothesis is true, what is the probability of getting the data that we got?" [Statistics_2023-10-08_15-00-04.txt @ 00:09:23]. Draw the null distribution and mark the sample result, and predict the decision from the picture first: "I would anticipate us rejecting the null hypothesis then, just based on that image." [Statistics_2023-11-15 14-05-53.txt @ 00:16:06]. Decision rule: "So if the p-value is less than alpha, we reject the null. If the p-value is greater than alpha, we fail to reject the null." [Statistics_2023-10-08_15-00-04.txt @ 00:30:48]. "Fail to reject," not "accept": absence of evidence is not proof. Type I and II by courtroom ("innocent to jail"); power is 1 minus the Type II probability; a bigger sample means more information and fewer errors.
- **The t statistic** as signal over noise: "it's kind of like signal to noise, almost." [Statistics_2023-12-06 12-45-01.txt @ 00:56:51]
- **Wording.** "I would say evidence to show, because it's like, it's not a rigorous proof. It's statistics, not math." [Statistics_2023-11-29 14-01-49.txt @ 00:17:30]. Say "no evidence of a relationship," not "no relationship," and keep strength separate from significance ("weak yet statistically significant").
- **Test selection.** Ask "why this test?" every time, by counting variable types: chi-square for two categorical; one-way ANOVA for a categorical predictor with 3+ groups and a quantitative outcome; two-way ANOVA for two categorical and one quantitative; regression for quantitative predictors; one-sample t against a given value; two-sample for two separate groups; paired for the same unit measured twice. "So it's the same experimental unit, the same person being observed." [Statistics_2023-10-08_15-00-04.txt @ 00:41:39]. Bug spray on one arm and not the other is a "beautiful paired test." Build the decision tree live, writing H0 and Ha at each leaf. Choosing is the real skill: "That's half the battle. Because the calculations aren't too bad, it's just, did I do the right one?" [Statistics_2023-10-09_11-16-50.txt @ 00:22:48]
- **Chi-square types.** Goodness of fit is one variable against a proposed distribution; independence is two variables; homogeneity is the same variable across populations, and the statistic is computed the same way.
- **ANOVA.** Four fingers: null is fingers together, alternative is spread apart; post hoc asks which finger is on top. In software output, check Levene's test first, then the ANOVA table, descriptives, Tukey. A significant result means the means differ, not that one "improved." Tukey: significant pairs have p under .05 "and don't contain 0 in the confidence interval" [Statistics_2023-11-08 14-02-00.txt @ 00:51:27].
- **Degrees of freedom.** A matching test: if you know four definitions, the fifth is forced. Or play the pick-a-letter game, coloring what was chosen vs what was determined.
- **Confidence intervals.** x-bar plus or minus t* times s over root n; say where each piece comes from; t* is the only thing to look up. Interpret with a template sentence: "We're 99% confident that the population mean for mu1 is somewhere between 2.43 and 7.57 units less than the population mean for mu2." [Statistics_2023-12-08 11-04-54.txt @ 00:45:54]. State the order of subtraction and read the sign: "when you see that you get something negative, that means the second thing must be bigger than the first." [Statistics_2023-11-08 14-02-00.txt @ 00:27:59]. Link to tests: "if 0 is in your confidence interval for a difference or a slope, it means it's not significant" [Statistics_2023-12-07 21-00-48.txt @ 01:00:28]. Given an interval, x-bar is the midpoint. A pooled variance must land between the two variances.

**Regression**
- **Coefficients.** Interpret every coefficient with units and "holding the others constant." Demonstrate holding constant by changing one input by 1 (10 miles to 11) and watching the prediction move by exactly the coefficient. "Interpret" means add context: "That would be if the question said state the slope. But it says interpret." [Statistics_2023-11-29 14-01-49.txt @ 00:49:08]
- **Intercept.** The prediction when every predictor is zero; say whether that is meaningful. "In fact, I just did a zero-mile triathlon. I just swam zero miles, I just ran zero miles, and I biked zero miles all in one day." [Statistics_2023-12-06 12-45-01.txt @ 00:08:28]. With no predictors, the best prediction is the mean: "So if you don't use any x variables to help you make a prediction, your best prediction for y is just the average." [RCode_2023-12-01 10-00-45.txt @ 00:24:05]
- **Dummy variables.** "When you have a dummy variable, it's always in comparison to the omitted group." [Statistics_2023-12-08 09-59-23.txt @ 00:35:36]. Use k - 1 of them, and show the table where one text column becomes several number columns. With an interaction, a main effect is the effect when the other variable is zero.
- **Correlation.** "bigger doesn't correspond to stronger. Being away from zero does." [Statistics_2023-12-02 13-28-23.txt @ 00:41:22]
- **Residuals.** "So just trust the math. It's actual minus predicted. And I get this one backwards a lot too." [Statistics_2023-12-06 12-45-01.txt @ 00:21:46]. Least squares means literal squares: "you imagine you're dragging a box from the line to the dot." [Statistics_2023-12-07 21-00-48.txt @ 00:33:22]
- **Significance.** The overall F asks "does this line do a better job than just using the average?" [Statistics_2023-12-07 21-00-48.txt @ 00:37:33]; its alternative is "at least one slope is not 0," not "all are not 0." Individual predictors get the t-tests. Reduced F-test: do the dropped variables matter together?
- **Model building.** Backward selection removes the highest p-value one at a time. Pick the final model by adjusted r squared even if it keeps a nonsignificant predictor, and write the rule into the answer.
- **Prediction intervals.** "Any individual will have more variance than the mean." [Statistics_2023-11-29 14-01-49.txt @ 00:31:52]
- **Assumptions and diagnostics.** "The acronym is LINE. So it's linearity, independence, normality, and equal variance." [Statistics_2023-11-29 14-01-49.txt @ 00:10:12]. In plain words: no pattern in residuals; fanning out violates equal variance. Cook's distance asks how much predictions change without one point; "When in doubt, filter it out." [Statistics_2023-11-13 18-00-50.txt @ 00:53:22]
- **Write-ups.** Use the r-squared Mad Libs frame (SKILL.md 3.10). Disambiguate vague labels in hypotheses: "Because the word status by itself could mean a lot of different things." [Statistics_2023-11-15 14-05-53.txt @ 00:41:50]

**Time series**
- Lower smoothing constant means smoother forecasts; higher means more responsive but can overreact. The first smoothed value equals the first actual; each smoothed value is next period's forecast; MAD and MSE use only periods that have both. Errors are absolute or squared because "we don't want to have a big over-prediction and a big under-prediction have us say, oh, well, we actually were pretty good." [Statistics_2023-12-07 21-00-48.txt @ 00:23:54]

**Software and calculator**
- **SPSS correlation matrix.** The diagonal is trivial, one triangle is enough, and significance is the row under the Pearson row. "Because it's symmetric across the diagonal. So you can just look at the lower triangle if you want." [Statistics_2023-12-13 11-29-27.txt @ 00:42:53]. A significance printed as .000 means below .001. Answer only what is asked: "It's asking for the correlation, not the significance value of the test." [Statistics_2023-11-12_19-59-15.txt @ 00:22:07]
- **Mock up the course's output.** When the real output is unavailable, recreate it with made-up numbers: "I did kind of make up the numbers, but they are at least internally consistent with one another." [Statistics_2023-12-06 12-45-01.txt @ 00:45:19]
- **Calculator.** Ask what is allowed. Use all the decimals given. Show the formula behind each calculator function. On test prep, plugging in answer values until one fits is a legitimate fallback when the algebra is hard.

---

## Calculus 1

- Rules go in boxed "helpful things to recall" (product rule, chain rule, d/dx ln x = 1/x).
- Tangent lines: get a point and a slope, color the point one color and the slope another, and drop them into y - y1 = m(x - x1) in matching colors.
- Implicit differentiation: color-underline every dy/dx, collect, solve.
- Curve sketching: critical points where f'(x) = 0, inflection points where f''(x) = 0, boxed side by side.
- Newton's method: write the formula boxed, sketch the tangent line, iterate until the digits match.
- Displacement vs total distance: absolute values around each piece.
- u-substitution: color-match the pieces that become u and du; change the bounds so you stay "in the u world." If the student reaches for u-sub out of habit, show a slightly changed problem where it would work. Check any antiderivative by differentiating it.
- Limits and other ideas: plug in first; when stuck, plug in big values (10, 100, 1,000) to see the trend. "Plug in 2, friend. You can always go back to plugging stuff in if you want a quick gut check on it." [Calculus2_2023-11-06 16-30-07.txt @ 00:40:19]
- L'Hopital: write a small "h" over the equals sign each time it is applied. "I always like to write this little h above the equal sign whenever I apply L'Hopital's rule. It just helps me remember." [2024-03-14 15-59-11.txt @ 00:23:08]. For an exponent indeterminate form, set it equal to y, take ln, apply L'Hopital, then exponentiate; the limit you found is ln y, not y.
- Limits at infinity as a tug of war, decided by the growth hierarchy (see Calculus 2).

---

## Calculus 2

**Integration techniques**
- **Which technique?** "If you see a square root and you can't do u substitution, then that's going to tend to be trig substitution. If you see a fraction, you can do partial fraction decomposition." [Calculus2_2023-12-12 13-59-08.txt @ 01:55:00]
- **Partial fractions.** "And so for the quadratic factor, you put a linear term above it." [Calculus2_2023-12-12 13-59-08.txt @ 00:13:51]. Plug in values that kill terms, and say it replaces a system of equations: "This is just kind of like, kind of a clever hack to get you there quicker." [Calculus2_2023-12-12 13-59-08.txt @ 00:19:23]
- **Integration by parts.** Derive it from the product rule. Choose u as the part that gets simpler when differentiated. Keep the sine/cosine derivative cycle in the notes.
- **Trig substitution.** Draw the right triangle instead of memorizing; afterward, notice when the integral was just a quarter circle.
- **Identities.** Regenerate them instead of memorizing: "What I always do is I remember for sure that sine squared plus cosine squared is 1. And then I know to divide everything by cosine squared" [2024-02-29 16-00-36.txt @ 00:43:59]. Derive the half-angle identity from the graph of cos squared (centered at one half, amplitude one half, period pi).
- **Shortcuts.** Rewrite to use the power rule "so that we don't go down the quotient rule rabbit hole" [Calculus2_2023-11-13 17-02-00.txt @ 00:24:51]. On symmetric bounds, check odd or even first: "if you see the negative a to a like that, whether it's infinity or not, do a quick check. Oh, is this even or odd?" [2024-02-29 16-00-36.txt @ 00:39:29]. "it's usually easier to evaluate integrals when there's a zero as one of the bounds, typically." [Calculus2_2023-12-07 16-59-39.txt @ 00:41:03]

**Applications**
- **Volumes.** Shells: ask for the volume of a hollow pipe, then cut and unroll it. "Now imagine taking a laser and, like, cutting the pipe." [Calculus1_2021-05-23_09-29-33.txt @ 00:09:26]. If the student says "pi r squared times the height": "That would be if it was a full pipe." [Calculus1_2021-05-23_09-29-33.txt @ 00:08:15]. Washers: "if your dx is perpendicular to your axis of rotation, that's what you have." [Calculus2_2023-12-11 17-01-18.txt @ 00:19:12]. Check that the volume came out positive.
- **Arc length.** Derive it: add up tiny hypotenuses with legs dx and dy, slide dx under the root and square it. "When in doubt, foil it out." Say so when a problem is rigged to make a perfect square. For parametric arc length, ask which step of the derivation changes (dx becomes dt).
- **Improper integrals.** Find the point of trouble first, split there, substitute with new bounds. Two divergent pieces cannot cancel: "And so we can't just smack two divergent things together and have it all cancel." [2024-03-07 16-00-12.txt @ 00:08:58]. Write "does not exist" as the answer.
- **Infinity vs asymptote.** "The difference is when it's infinity, you want it to remain in the denominator because then it goes to zero. But when you're crossing a vertical asymptote, you want it to get to the numerator so that when you plug in the zero, it's not undefined." [Calculus2_2023-10-04 21-02-53.txt @ 00:49:05]
- **Probability densities.** "What k makes this valid" means integrate and set equal to 1, because total probability over 1 would be a "200% chance." "This is not just evaluate the integral. This is an equation." [Calculus2_2023-10-09_17-05-45.txt @ 00:04:54]. Approximate infinity with a big number and ask what the result means ("arctan of 999999 ... about 1.57. Does that number mean anything to you?" [Calculus2_2023-10-09_17-05-45.txt @ 00:06:26]). Use geometry for a triangle-shaped density and symmetry as a shortcut for the mean, with a warning that symmetry is not general. The median solves "integral equals 0.5." Derive the continuous mean from the discrete one: "The continuous case is just the generalization of the discrete case." [Calculus2_2023-10-09_17-05-45.txt @ 00:24:06]

**Sequences and series**
- **First questions.** Which variable is the counter? "n is basically the counter that counts 1, 2, 3, 4, 5, 6, all the way up to infinity." [Calculus2_2023-11-06 16-30-07.txt @ 00:00:56]. Where is it centered? Don't confuse look-alike numbers: in a power series the x + 8 sets the center and the 8 to the n sets the radius.
- **The term vs the sum.** "The terms that we're adding goes to 0, but the sum might not go to 0." [Calculus2_2022_3-10-25_10-01-26.txt @ 00:07:22]. Ask the student for a sequence that shows it.
- **Growth hierarchy.** Constant, polynomial, exponential, factorial: "The thicker one means it's going to dominate the behavior." [2024-02-29 16-00-36.txt @ 00:24:35]. "If you had a constant over a factorial, you get to immediately say it's zero." [2024-03-14 15-59-11.txt @ 00:39:48]. Guess the limit aloud first: "Now, we actually have to show it, but it's good to just kind of think through it and have a guess going in." [Calculus2_2023-11-03 10-12-06.txt @ 00:22:19]. The degree of a polynomial comes from the term, not its position: "It doesn't have to be on the far left. It is the coefficient on the term that determines the degree." [2024-03-14 15-59-11.txt @ 00:11:30]
- **p-test.** Show the borderline with 1.01 vs 0.99 and a picture of "too much space." Explain why 1/x is special through the power rule (x^0 over 0). Tie p-series to the integral for intuition.
- **Comparison tests.** A 2x2 chart with two "?" cells: "Being bigger than something convergent is like, well, that doesn't tell me anything. And being less than something divergent also doesn't tell you anything." [Calculus2_2023-12-12 13-59-08.txt @ 01:02:53]. A sine in the numerator is not cleanly alternating, so use direct comparison. Tests never conflict; one may say convergent while another is inconclusive.
- **Ratio test.** Absolute value bars; multiply by the reciprocal right away instead of building a compound fraction; say the target (less than 1) before simplifying; check endpoints separately in the original sum; state the center and radius. It does little for pure polynomials. Run counterfactuals ("if this had said n squared...").
- **Alternating series.** "Just because it's alternating doesn't automatically make it converge." [Calculus2_2023-11-06 16-30-07.txt @ 00:41:57]. cos(pi n) alternates; cos(n) does not (list values to check). At an endpoint, plugging -1 into (-1)^n times another (-1)^n doubles the exponent and kills the alternation. Error bound: list partial sums (1, 1/2, 3/4, 5/8, 11/16) and show the first omitted term bounds the error; find the first n whose term is below tolerance, watching the starting index.
- **Telescoping.** "Well, we want them in the form of differences. That's really the key." [Calculus2_2022_3-10-25_10-01-26.txt @ 00:49:58]. Write terms until the pattern shows.
- **General terms.** Guess from the first few and always write the first one as a check: "that's why it's important to write down the first one as the base case to make sure that stays consistent" [Calculus2_2023-11-13 17-02-00.txt @ 00:43:12]
- **Taylor series.** Motivate as matching value, slope and curvature; derive the first terms by hand ("The pattern will emerge."), then use the geometric-series shortcut ("The key is 1 over 1 minus r, and r can be some function of x." [Calculus2_2023-11-09 13-58-51.txt @ 00:50:26]). "Really, if you just remember Taylor, you don't need to remember McLaurin, you just need to know that a is 0 and then it reduces to it." [Calculus2_2023-11-13 17-02-00.txt @ 00:18:20]. Precision: "what we are modeling here is not the derivative. It is the derivative evaluated at zero." [Calculus2_2023-11-17 09-58-21.txt @ 00:38:22]. Plot the polynomial against the function in Desmos, adding terms with a slider, and show it is only good near the center. Derivatives down one side of the page, evaluations down the other.
- **Radius and remainders.** The radius is at most the distance from the center to a vertical asymptote. For a Taylor remainder, choose the x that maximizes the derivative bound (usually an endpoint), then find n by trial.
- **Proofs.** "it's good to know the answer right away before stepping into a proof though" [Calculus2_2023-11-17 09-58-21.txt @ 00:52:36]

**Parametric and polar**
- **Parametric.** dy/dx = (dy/dt)/(dx/dt); second derivative via the quotient rule. "do the derivatives separately and then divide. That is not equivalent to dividing and then taking the derivative." [Calculus2_2023-11-30 17-00-09.txt @ 00:16:14]. sqrt(t) is the principal root only; the derivative of 2^t needs ln 2. Do it both with and without eliminating the parameter. Check concavity on a graph.
- **Polar.** Spin, then walk (negative r walks backward). Lines through the origin are theta = constant. Match graphs to equations with landmark angles: "When you plug in 0, what do you get? When you plug in pi over 2, what do you get?" [Calculus2_2023-12-04 17-59-34.txt @ 00:22:46]. Box the conversion formulas grouped by what you are given.

---

## Calculus 3

- "But, you know, Calc 3 is just Calc 1 on steroids." [2024-03-15 19-00-38.txt @ 00:17:13]
- **Contour maps as terrain.** Critical points are the flat spots where you could sit while hiking; max, min or saddle depends on whether every direction goes down, up or both.
- **Second derivative test by intuition** first (why must fxx and fyy have the same sign?), then the formula. Cross derivatives only appear when x and y multiply ("crossover"). Plug critical points back in for the function's value. Count the critical points as a check.
- **Specialize a variable** (set y = 2) to see a partial derivative, then generalize.
- **Multivariable limits.** Plug in; if 0/0, factor or use a conjugate; otherwise test paths through the point, choosing paths that collapse the denominator. Two paths giving different values prove the limit does not exist; agreement proves nothing. Prove existence with the squeeze theorem. If completely lost on a squeeze problem, 0 is a reasonable guess.
- **Domains.** Keep a "helpful notes" list: "these are really the three things that will mess with your domain." [2024-03-07 11-14-15.txt @ 00:11:26]
- **Vectors and planes.** Color the components consistently across the problem text and the calculation. Use a book as the plane and a three-legged stool for why three points fix one. Write a plane through a point as 4(x-1) - 7(y-0) + 2(z+2) = 0 so the constant takes care of itself. For a cross product, be honest that the sign pattern is a convention: "And I'm admittedly not going to have a great explanation of this, but think of it like a checkerboard where it goes plus, minus, plus." [2024-03-07 11-14-15.txt @ 00:31:47]
- **Intersections of surfaces.** Solve for a squared term, not the variable itself.
- **Iterated integrals.** Connect to partial derivatives: work inside out, and the other variable sits still as a constant. Use a fresh letter rather than reusing u: "I'm not a huge fan of reusing the same variable, so I'm going to use w." [2024-03-16 19-04-14.txt @ 00:47:07]. Celebrate the reduction: "Gotten from calc 3 land to calc 1 land." [2024-03-16 19-04-14.txt @ 00:43:40]

---

## Algebra and precalculus

**Equations and expressions**
- **Isolate the unknown, starting from a fact.** 5 + 7 = 12, then 5 + some unknown = 12. "the goal is always to isolate x, meaning just to get x by itself." [Algebra_2023-11-10_17-28-44.txt @ 00:02:35]. An equation is a balance; check that x did not vanish along the way.
- **Simplify first, then look for like terms.** Radicals that look different can become like terms.
- **Like terms with objects.** Pencils, pizzas, dollars owed. "When you're adding and subtracting, the variable and the exponent stay the same." [Algebra_2023-11-02 20-59-42.txt @ 00:14:31]
- **Exponents.** For negative exponents, count how many of each factor are on top and bottom; check with positive exponents; cross-check with the subtract-the-exponents rule. Don't apply an outside exponent to everything at once: "You can immediately apply the negative 3 exponent into everything. But I actually wouldn't recommend that" [Algebra2_2023-10-10_21-06-13.txt @ 00:13:56]. Trap: "When there's addition or subtraction like that, you can't just apply the 2 to everything. That works when there's multiplication and division inside." [Precalculus_2023-12-12 16-35-34.txt @ 00:52:13]. Motivate fractional exponents by arguing they must exist (plot the integer powers and pin 2^(3/2) between 2 and 4).
- **Radicals.** A radical is a "haunted house" a factor escapes when there are enough copies of it (three for a cube root); writing the reverse is the "sequel." Treat a radical like a variable when combining. Know perfect cubes up to 10 or 11. Estimate a square root by bracketing it between known squares, then factor to primes; the leftover is "everything that didn't have a buddy."
- **Radical equations.** Isolate the radical, square both sides, FOIL, set to zero, factor, and check each answer in the original equation. Say why step one comes first: "so that squaring it actually gets rid of the radical." [PreCalculus_2023-11-27 20-38-01.txt @ 00:13:11]. Squaring and absolute values are where extraneous solutions come from.
- **Zero product.** "If a times b equals 0, either a or b is 0."

**Factoring and quadratics**
- **Factoring trinomials.** Set the equation equal to zero first. Factor out the greatest common factor first (for variables, the smallest exponent). List all factor pairs and push for completeness. Get the signs from the constant: "The only way that our last terms multiply to a positive number is if they're both positive or both negative." [Algebra2_2023-12-13 15-56-08.txt @ 00:05:20]. Then one binary decision: plus-minus or minus-plus. Check by distributing back.
- **When a is not 1.** List factor pairs of a and of c, link them crosswise, and add or subtract to hit b. "This is an exhaustive search where you're not going to miss it doing it this way." [Precalculus_2023-11-29 21-05-49.txt @ 00:33:16]. For 10 - x vs x - 10, factor out a negative 1.
- **Perfect squares.** Separate recognizing from executing; drill yes/no recognition first. The test: take the square root of the first and last terms, multiply them, double it; if that is the middle term, it is a perfect square. Forgetting the 2 is the classic slip. End with traps (a hidden minus, a cube). Learn one more perfect square for every year of your age.
- **Quadratic formula.** Set to zero first; the coefficients are the numbers in front (1 if none); the letter of the variable does not matter. "Those are not the variables. They're not the variable squared." [Precalculus_2023-12-05 12-47-57.txt @ 00:05:34]. Split plus-minus into two lines. After each quadratic, ask the same classification questions: real? rational? does it cross the axis?
- **Graphs.** Use the seven-step graphing recipe. Find a vertex or shift by asking what makes the inside zero (parentheses, absolute value bars or a square alike). Max or min comes from the sign of a; trace the parabola in the air. The axis of symmetry is a line you fold over, not a point. Plot points one unit from the vertex: "this is why I like to go just one unit away because then it's just 2 plus 5." [Algebra2_2023-12-18 15-30-04.txt @ 00:43:16]. Build transformations from the parent function one change at a time. Use the discriminant table.
- **Complex numbers.** Motivate first: "So, before we dive into imaginary numbers, let's remind ourselves that a negative times a negative is a positive. What's negative 3 times negative 2? Have you ever thought about that?" [PreCalculus_2023-11-15 15-58-56.txt @ 00:00:41]. Then rotation on a number line (times -1 is a half turn, times i is a quarter turn), but only if the course has covered it; otherwise "no solution." For powers of i, divide the exponent by 4 and use the remainder, not a decimal. "You do the numbers together, you do the i's together, and then you see if there's any way to combine them at the end." [Algebra2_2023-12-06 16-29-11.txt @ 00:09:44]. FOIL traps: the last terms make i squared, and subtracting a complex number distributes the minus.

**Rational expressions and equations**
- Start with the same-denominator number version ("might as well say 6 over 10 plus 3 over 10"). Factors vs multiples side by side. A common denominator multiplies by a form of 1: "Okay, we will change the form, but not the value." [Precalculus_2023-11-06 20-01-59.txt @ 00:22:39]. Fallback: multiply the denominators. Leave denominators factored. Warn before the minus distributes over a whole numerator. Complex fractions: multiply by the reciprocal, after showing why. Zero on top is fine; zero on the bottom is undefined, so set the denominator to zero for the domain.
- **Cancel, don't cross-multiply,** when simplifying a product of fractions. A numerator that factors cleanly tells you something will cancel.
- **Rational equations.** Clear denominators with an LCD built from prime factor trees, taking the highest power of each factor: "x to the third would also cancel it, but it's just a little bit of overkill." [PreCalculus_2023-11-13 20-02-49.txt @ 00:48:01]. Put integers over 1 to unstick the student.

**Functions, logs and sequences**
- **Logs.** Reflect the exponential across y = x, swap the points, and predict that domain and range swap. Every exponent property has a log twin; list them side by side. A vertical asymptote is where the inside of the log equals zero, written "x = c." Check answers: "we could not plug in minus 5 back into our original equation because we can't take the log of a negative" [2024-03-07 19-00-47.txt @ 00:48:49]
- **Calculator parentheses.** Close each group deliberately, and round once at the end.
- **Sequences.** An arithmetic sequence is a line and the common difference is its slope. Recursion needs a base case. Ask how the sequence is indexed. Calculator trap on geometric terms: multiply by the first term, "don't just do 4 to the 19th." [Precaclulus_2023-05-07_15-15-15.txt @ 00:19:01]. For a ratio of polynomials, compare degrees (three cases, each tested with an example). For an infinite geometric sum, show partial sums (20, 30, 35, 37.5, 38.75), give the formula, then offer the derivation.
- **Notation.** Say the answer in words first, then write it in interval, set or inequality notation, using whichever the class taught.
- **Perpendicular slopes.** Write "8 times m2 equals negative 1" and solve rather than guess.

**Word problems and handwriting**
- **Word problems.** Define "Let x = ..." first, block out extra information, test the translation with x = 1. Picture the physical situation before computing (a saw cut loses material: "you imagine sawing through that, you don't get two 6-inch pieces of wood." [2024-04-10 19-35-27.txt @ 00:22:49]). For "maximize a fraction," maximize the numerator and minimize the denominator, then eliminate choices.
- **Systems.** Elimination template with a red "-( )" and the boxed sign rule; check with a Desmos graph of the two lines. One equation with two unknowns is not enough information.
- **Handwriting.** Cross your z's, curve your 2's, and make 5's unmistakable.

---

## Geometry

- **Angle chasing is one decision:** equal, or adds to 180? Teach the keywords (bisect, vertical, linear pair, triangle sum) and justify every step by name. Write the equation, solve, plug back. Knowing one angle often locks the rest: "if you know one of these angles, it kind of locks this whole section in." [2024-01-16 21-02-55.txt @ 00:06:43]. Read the fine print: "when it says if any, that means it's possible that none of them are" [2024-01-16 21-02-55.txt @ 00:15:00]
- **Naming angles.** "you kind of like start at a point, you go in and go out." [2024-01-16 21-02-55.txt @ 00:44:20]
- **Vocabulary through roots:** bi-sect like bicycle, co-linear like cohabitant. "any two points are always collinear, any three always coplanar."
- **Arms and objects:** parallel, perpendicular and skew lines with arms; rotate yourself around objects on your desk to see views of a solid.
- **Views of solids:** draw the solid, shade what is visible from each side, remember the back view is the front flipped left to right ("you're going to basically horizontally flip it. Not vertically." [Geometry_2023-10-03_16-34-02.txt @ 00:18:09]). Solve once, then match the choices.
- **Proofs.** Color the givens green and the goal purple. Work forward from the givens and backward from the goal until they meet, tracking which pieces of the target pattern (angle-side-angle) you already have, then convert the informal chain to a two-column proof. Pick the congruence rule by counting what the picture gives: "it's important that the angle is between the two sides." [Geometry_2023-11-07 20-05-25.txt @ 00:15:09]. Show SSA fails by swinging the side to make a second triangle. CPCTC comes after congruence: "the way that you ultimately get to that is by proving the triangles are congruent" [2024-01-16 21-02-55.txt @ 00:41:27]
- **Proof errors.** When the student's instinct is right but a step is unearned, ask where it came from ("Did we ever say that m was the midpoint?" [Geometry_2023-11-14 21-01-26.txt @ 00:44:34]) and add any hidden assumption to the givens. Circularity: "Like, that's kind of using the outcome to prove the input." [Geometry_2023-11-14 21-01-26.txt @ 00:50:21]. Letter order in a congruence statement is a claim; a wrong order "Wouldn't have been able to prove it because it wouldn't have been true." [Geometry_2023-11-14 21-01-26.txt @ 00:05:22]
- **Regular polygons:** split into n congruent triangles; central half-angle 360/n/2; trig for apothem and half-side; area is one half base times height, times the count.
- **Circles.** r, d, C and A are linked; know them cold ("So these we really gotta know" [Geometry_2023-11-29 16-03-00.txt @ 00:39:41]). Derive arc length and sector area from what they must depend on (angle and radius) and test 180 degrees as half the circle. Calculator trap: 7 divided by 2, then times pi. Verify circle angle answers by a second route.
- **Probability from area:** favorable over total, always between 0 and 1. Mentally rearrange shapes to see fractions (a kite is half its bounding rectangle).
- **Similar triangles:** color matching sides in the figure, the proportion and the cross-multiplication. Geometric mean as the side of a square with the same area as a rectangle. Ratios carry across parallel lines: "It's only because these are all parallel that we get to just tie that ratio across." [2024-04-10 19-35-27.txt @ 00:47:19]
- **Pythagorean theorem** (from the training): four triangles inside a big square of side a + b; rotating triangles does not change the uncovered area, so a^2 + b^2 = c^2. Start from 3-4-5. The distance formula "which is really just the Pythagorean theorem in disguise." [2024-04-10 19-35-27.txt @ 00:35:25]. Bound irrational roots (6.32 times 6.32 is 39.94) and the third side of a triangle before solving.
- **Units.** For area, "the conversion factor also gets squared." [2024-02-14 19-01-09.txt @ 00:05:30]
- **Parallelograms and algebra.** Decide first whether it is an angle question or a length question. Setting up the equations is usually the hard part.
- **"Which does NOT..." questions:** go through each option with a reason, then use the definition.
- **Euler and parity:** test with a small solid you can draw; prove parity facts with small numbers.
- **Finish with the reverse problem.**

---

## Linear algebra

- **Definitions as criteria.** "So a vector space isn't, like, a thing. It's basically a set of criteria, and anything that meets this criteria is a vector space." [2024-03-15 14-46-28.txt @ 00:02:39]. A boxed three-part subspace test (contains the zero vector, closed under addition, closed under scalar multiplication). Don't call the integers a subspace of the reals; they fail closure under real scalars.
- **Row reduction.** One row operation per matrix, labeled. Line up columns so the structure shows.
- **Span and dependence.** Write polynomials as coefficient vectors (pad with zeros), look for a combination by inspection first, and row reduce if that fails. Test dependence three ways: a combination, the only-zero-solution definition, and row reduction. "Think of what the words mean. Your other values depend on your choice of free variable." [2024-03-15 14-46-28.txt @ 00:13:56]. Turn "free variable" into a test: "if I tell you z is 5, for example, can you tell me what y has to be then? Okay, what about x? Right, so you really only get one choice here." [2024-03-15 13-30-04.txt @ 00:14:42]
- **Bounds and counting.** State the bound before computing: "For 61, it's at most 3. I'm not saying it is 3, I'm saying it's at most. Because you have 3 polynomials, it can't possibly be 4." [2024-03-15 13-30-04.txt @ 00:07:26]. "Because how could something with four vectors possibly span a five-dimensional space? You can't." [2024-03-15 14-46-28.txt @ 00:23:58]
- **Basis.** "These are kind of two opposing forces, the linear independence and the spanning, and you need to get both in order to be a basis." [2024-03-15 14-46-28.txt @ 00:22:41]
- **Differential equations in linear algebra.** Solve the familiar part first (the differential equation), then add the one linear algebra step. Make a general constant concrete (let c = 5). Give an example and a non-example for notation like C1(R).

---

## Abstract algebra

- **Specific before general.** Keep a small concrete group beside the proof (Z6, Z36). "it's oftentimes when trying to think through a general case to start by thinking through a specific case." [AbstractAlgebra_2023-10-24_15-01-29.txt @ 00:04:59]. Get the idea informally, then formalize.
- **Use every hypothesis.** "that's why whenever there's key information, that tends to show up in the proof." [AbstractAlgebra_2023-10-24_15-01-29.txt @ 00:14:29]
- **Proof setup.** In a proof by contradiction, make the student state the assumption: "What haven't I said that's important for us to say at the beginning?" [AbstractAlgebra_2023-10-24_15-01-29.txt @ 00:34:56]. With exactly two cosets, split into g in H and g not in H.
- **False converses.** "So it's counter example, not contradiction." [AbstractAlgebra_2023-10-24_15-01-29.txt @ 00:52:16]. Build the counterexample from a familiar group (D4 with its rotation subgroup).
- **Test a hunch** by changing one thing and seeing whether anything else changes. Say the cost of rigor out loud: "For these, it's always tough of how thorough and in-depth you want to be." [AbstractAlgebra_2023-10-24_15-01-29.txt @ 00:52:50]

---

## Discrete math

- **Induction:** ask for the student's current understanding, state the two-part structure, test a small case, write the n + 1 statement, use the hypothesis ("What jumps off the page to you, to this statement?" [DiscreteMath_2023-11-02 14-59-16.txt @ 00:06:48]), then have the student explain the whole page back.
- **Strong induction:** start with a recurrence that needs two earlier terms; the number of base cases equals the size of the jump back.
- **Counting:** bound the answer first; translate words ("exactly k" picks positions; "at least" means subtract from the total); glue required letters into one block; lock in required items first ("Now we have four left to choose with repetition." [DiscreteMath_2023-11-16 15-00-18.txt @ 01:32:56]); check edge cases ("Anything choose 0 is 1."); separate n choose 2 from n squared with friends you can hang out with. Ask whether order matters (a sack of bagels) and settle ambiguities like capital vs lowercase letters out loud. When the key disagrees, name the error class ("treating it as if it were a permutation").
- **Binomial theorem:** expand the first few powers by hand, find the pattern, then require Pascal's triangle. Rows start at 0 and the row number is the exponent; count terms to check. Write the general term with sigma before choosing the specific k, and pick example numbers where k and n - k differ.
- **Relations:** take closures step by step and re-check transitivity after every addition: "whenever you add things, that might mess with transitivity." [DiscreteMath_2023-12-07 15-00-29.txt @ 00:51:23]. R squared is "a friend of a friend."
- **Modular arithmetic:** start from elementary-school remainders, then sort integers into a finite set of categories.

---

## Economics (micro)

- **Define by lived experience.** Price sensitivity from rent; elasticity from having to move out on short notice; a whole market built from the student's last purchase. Positive vs normative: "And if it sounds like something your crazy Aunt Norma would say, then it is a normative statement." [Economics_2023-11-28 18-05-01.txt @ 00:31:12]; a positive statement can be false.
- **Graphs.** Find intercepts by setting the other variable to zero. Draw to scale, because a bad graph poisons later steps. Keep each curve one color throughout.
- **Shifts.** Use one market of the student's choice for all four shifts, and draw combined shifts instead of holding them in your head. Collapse the family into a rule: "Demand, they move together. Supply, they move opposite one another." [Microeconomics_2023-11-30 20-01-46.txt @ 00:58:44], and "think of it as right and left and not up and down." [Microeconomics_2023-11-30 20-01-46.txt @ 00:26:13]. Costs never move demand: "your cost to produce a thing in no way is related to how much people are willing to pay for a thing." [Microeconomics_2023-11-30 20-01-46.txt @ 00:43:17]. On multiple choice, decide which curve moves and which way first, then scan the options.
- **Price controls.** Check whether it is binding (a floor below equilibrium does nothing), then "walk the line": stand on the floor or ceiling and see which curve you hit first. The gap is the shortage or surplus. Read whether the question wants the shortage or the units sold.
- **Elasticity.** Percent change, not dollar change (a candy bar from $1 to $2 vs a steak from $76 to $77). "The key is to know the comparison is to the absolute value of 1." [Economics_2023-11-01 21-47-54.txt @ 00:45:12]. Run the revenue test with a real price (a tutor's hourly rate). Build a lookup table in the notes (elastic, inelastic, unit elastic by raising or lowering price). When the professor's formula and the textbook's disagree, test both against the key and keep the class version.
- **Taxes.** Incidence depends on relative elasticity, not on who is legally taxed. Check that consumer plus producer shares make 100%.
- **Comparative advantage.** Opportunity cost per ONE unit; convert goods to dollars to standardize ("Imagine this was dollars instead of shoes." [Microeconomics_2023-11-29 20-06-59.txt @ 00:04:33]); lower opportunity cost wins; terms of trade fall between the two costs; prove the gain with numbers; ignore absolute advantage.
- **Consumer theory.** Contrast new problem types with the last one (maximize utility under a budget vs minimize spending for a target utility). For marginal utility per dollar, have the student "buy" the best item one at a time, tracking dollars separately from units, then notice the ratios are equal at the optimum; warn when a cost column is per unit, not cumulative. Predict before computing; check against a worse bundle. CPI and growth are "just percent change."
- **Costs and firms.** Average fixed cost falls because the fixed cost is spread over more units. The cost table is a scaffold: "The chart was kind of just an educational tool. You can sort of jump directly to the equation if you know it." [Economics_2023-11-01 21-47-54.txt @ 00:47:58]. Monopoly: build the revenue table, show marginal revenue falls twice as fast, and land on MR = MC: "If you remember anything from today, it's that." [Microeconomics_2023-12-08 18-31-40.txt @ 00:34:37]
- **Oligopoly.** Cournot and Bertrand: "construct what is being optimized and then use known tools of optimization" [2024-04-09 12-04-35.txt @ 00:23:49]; differentiate only with respect to your own choice; multiply out before differentiating.
- **Game theory.** State the payoff convention first ("So lower is better for this one." [Microeconomics_2023-12-10 18-02-20.txt @ 00:00:41]). Role-play each player in the first person. Underline each player's best responses in their own color; the Nash equilibrium is where both colors land; use iterated deletion only if that doesn't finish it. Draw game trees vertically and solve by backward induction: "So that branch kind of gets chopped off." [Microeconomics_2023-12-10 18-02-20.txt @ 00:40:06]
- **Information and externalities.** Moral hazard, adverse selection and externalities through everyday stories (see analogies). Teach the mechanism, never a political side.
- **Politics.** Teach the model from the center (see [policies.md](policies.md)).

---

## Economics (macro)

- **Talk it through first.** Give verbal intuition for every sign, then the graphs, then the algebra; often the talk already answered part (a): "So we basically just verbally answered part A." [Economics_2023-11-27 17-00-29.txt @ 00:01:56]
- **Define every symbol in words** before differentiating, and say which parameters are exogenous.
- **Collapse the system to one equation,** then recap the algebra as a story ("3 equations and 3 unknowns to 2 ... to 1").
- **After algebra,** return to what was asked and say what each symbol means in the economy. Check internal consistency (C + I + G adds back to output).
- **Read the structure:** which terms push up, which pull down; "your premium depends on how rare you are." Treat everything but the key term as a constant that only scales. Sign analysis piece by piece: "Let's go piece by piece, alright? So is this minus sign out in front, is that minus or positive?" [Macroeconomics_2023-12-04 17-00-34.txt @ 00:32:00]. Test a parameter bound by asking what it would mean if it were exactly 1.
- **Traps.** "I know it looks like it's in the numerator, so it looks like it should go up ... But this actually goes down." [Economics_2023-11-07 14-15-32.txt @ 01:13:57]. On swapped axes, a slope becomes its reciprocal, so "steeper" can become "flatter."
- **Comparative statics as numbered links:** "that's step one of our logic. Step two is this is actually going down. So we flip the signs of these now." [Economics_2023-11-06 17-44-11.txt @ 00:29:22]. Keep a plus/minus/zero/question-mark table for each shock and add columns for combined shocks.
- **Optimization.** Rearrange to avoid the product rule. "Solve for tau? No, don't solve for tau. Take the derivative with respect to tau and set that equal to 0." [Economics_2023-11-10_12-05-32.txt @ 00:55:09]. Justify the Lagrangian, then reuse it: "it establishes the balance, not the level." [Economics_2023-10-10_18-00-58.txt @ 00:26:47]. Pick a value for a Greek parameter to recognize the shape (alpha = 0.5 is square-root utility). Useful identity: 1 - 1/(1 + beta) = beta/(1 + beta).
- **Exam conventions.** "On a test, if it doesn't say beta equals 1, then you keep it, but when beta equals 1, I think we're good to drop it." [Economics_2023-11-07 14-15-32.txt @ 00:12:59]
- **Growth.** Write growth as (1 + g)^t. Log vs root: "How do we know it's a natural log and not a root? Because the variable's on the exponent." [Economics_2023-10-26_13-59-48.txt @ 00:30:18]
- **Multi-graph models:** draw a base case in equilibrium, copy it, apply one shock per copy, and trace the change through every graph like a light beam off the 45-degree mirror. Color each shift by its cause.
- **Steady state** means dropping the time subscripts; show stability with arrows on a cobweb diagram. A stable steady state pulls you back like gravity.
- Name modeling assumptions, show how the answer changes, and answer under the course's stated assumption.
- **Give the student a spreadsheet model to play with:** predict, change, verify. Start a recursion from several values and shock a parameter mid-run: "See it finds equilibrium, and then it's displaced, and then finds a new equilibrium." [Economics_2023-10-30_17-02-30.txt @ 01:22:40]

---

## Finance

- **Time value of money from the student's own preference** ($100 now vs $100 or $110 in a year; find their breaking point: "Would you wait for 350? ... Would you wait for 325?" [Finance_2023-09-27_16-14-16.txt @ 00:01:48]), then write the formula with their numbers. Name every symbol in words. Roll compounding forward by hand (100, 110, 121, 133.1) before generalizing. Practice converting rates both ways (0.047 is 4.7%).
- Annual compounding unless stated; otherwise r over n and n times t. Catch calculator-entry errors by magnitude ("So it should be less.") and by asking to see the screen.
- **Bonds.** Fixed coupon, changed market rate, so price moves inversely; "locked in" at the old rate. "Think of interest rates as gravity on asset prices." Price includes the discounted face value, not just the coupons. Return uses the price actually paid; current yield is the coupon over the price. As time passes: "all the ones you've received, you cross off from the original, and then however many years passed, you subtract that from what's remaining." [2024-02-21 16-00-51.txt @ 00:27:36]. Compare cash-flow options by discounting each to the present, then ask "why did the answer change?" when r changes.
- **Simple vs compound:** $100 to $110 to $120 vs $100 to $110 to $121.
- **Returns:** divide by what you started with; a dollar profit means nothing without the base.
- **Real vs nominal:** with a product the student buys; real is roughly nominal minus inflation (say it is a simplification).
- **Debt vs equity:** "Guess who still owes the bank 100 grand? Me. Well, the company, but mostly me." [2024-02-14 15-58-17.txt @ 00:15:46]
- **Ratios.** Ask which firm they would rather be and make them argue the other side. If they forget a formula, reverse-engineer it from the numbers in the table.
- **CAPM and portfolios.** Map every given number to a symbol and flag what is missing. "when it says risk premium, that means it already has subtracted out the rf." [Finance_2023-10-10_15-30-35.txt @ 01:00:14]. Build the two-asset variance in Excel with weights from 0 to 1, and test the endpoints (all weight on one asset should return that asset's own numbers).
- **Banking:** banks lend out most deposits; reserve requirements as "reverse blackjack."
- **Foreign exchange:** compute the reciprocal rate, then ask which currency the student would rather hold; cross rates by unit cancellation; predict the direction by intuition, then check the formula, and treat a flipped ratio as the lesson.
- **Taxes and gray areas.** Gate the advice: "you really should keep receipts, and you really should read the relevant tax code." [Finance_2023-09-27_18-18-18.txt @ 00:55:21]
- **Tools:** TVM Solver key path written on the board; label cash-flow problems with tags like (Monthly), (APR), (Forever).

---

## Accounting

- Order: assets, liabilities, equity (A = L + E, derived from A - L = E as a bit of algebra review); debits and credits by account type; then a transaction story for a business the student invents ("So how much money do you think you might need to start the company? Throw a number out there." [2023-12-19 21-01-10.txt @ 00:11:24]).
- Classify cash flows as financing, investing or operating, flagging the ones that feel like the wrong category.
- Watch the counterintuitive cases: "that was not technically an expense, that was an investment in inventory." [2023-12-19 21-01-10.txt @ 00:19:31]. Unearned revenue: prepaid sessions are not revenue until they happen.
- Income statement, then ROI from the investor's seat, then leverage by running the no-loan counterfactual, then the downside: "Debt is neither inherently good or inherently bad. It's kind of like a sharp knife." [2023-12-19 21-01-10.txt @ 00:39:57]
- Build an amortization table by hand with the two relations (payment minus interest equals principal; balance minus principal is next year's balance), and assign the rest with the self-check that the last balance is zero.
- **Bonds payable.** Draw the timeline of cash flows first (color what you receive); principal at maturity and the last interest payment are separate. Anchor the journal entry on the number you can trust: "I would start with The bond payable being a credit of the exact amount that they tell you. Figure out how much cash you're actually receiving and then have your discount or premium go in the right place to make sure those things balance out." [Accounting_2023-11-08 15-00-37.txt @ 00:45:10]. Straight-line amortization is total discount over years; the balance sheet carries face minus the unamortized discount. After a correct choice, still ask: "How did you know that you were going to use a bond discount in A?" [Accounting_2023-11-08 15-00-37.txt @ 00:22:57]
- Remind students that the math is easy and the words are the barrier. Reword bad prompts: "Yeah, that's a horrible way of saying it. The way I would say it is, what is the value Of bonds payable on the balance sheet as of December 31st, 2025." [Accounting_2023-11-08 15-00-37.txt @ 00:35:06]

---

## Coding and software (R, Python, pandas, Excel, SPSS, JMP, Git)

**How the session runs**
- **Make it about something the student likes** (the fraternity-tier program in the training).
- **The student drives.** The student shares the screen and types; you direct by line number and structure ("So just kind of initialize 2 blank lists for us." [RCode_2023-11-17 11-00-18.txt @ 00:02:50]) and explain each line after it is written. Dictate syntax and spelling exactly; keep asking about meaning.
- **Setup first, and say it's the worst part.** "Honestly, for a lot of this coding stuff, the setup is the hardest part, and it's kind of a hurdle of getting the proper software set up." [Python_2023-11-08 17-00-06.txt @ 00:16:00]. In chat, paste one command at a time, explain it in one line, and ask for the exact error text back.
- **Read the instructions and the rubric** before writing code; do what is asked even if it is statistically pointless, and say so. Inspect the data before coding. Ask what a vague request means: "And do you mean faster to do or faster to, like, the code executes?" [RCode_2023-11-16 10-01-35.txt @ 00:15:20]

**Building**
- **Pseudocode, then a ladder of tiny runnable steps.** "this is pseudocode. I don't know if this is perfect syntax, but this is the idea." [RCode_2023-10-24_10-09-01.txt @ 00:04:41]. "don't even worry about the streak, just simulate one single spin." [RCode_2023-11-07 10-00-13.txt @ 00:04:50]
- **Happy path first, then errors.** "we are now going to pretend that there aren't any errors, get it working functionally there, and then..." [Python_2023-11-30 10-01-15.txt @ 00:13:01]. Then break it on purpose and add error handling.
- **Defining vs running.** "So from 10 to 29, you're defining the function. On 31, you are running the function." [Python_2023-11-30 10-01-15.txt @ 00:25:49]
- **Don't hardcode the example.** "you actually just want to say current streak is current streak, whatever it was before, plus 1." [RCode_2023-11-07 10-00-13.txt @ 00:41:26]. A hard-coded name is a chance to show "how literal computers are" [Python_2023-11-08 17-00-06.txt @ 00:51:34].
- **Clarity over best practice, openly.** "Is that best practices? No, but is that going to make a little more sense and make our lives easier? Yeah." [RCode_2023-11-16 10-01-35.txt @ 00:49:38]. Narrate control flow as comments. When translating between languages, use the earlier solution as the key.

**Testing and debugging**
- **Test small, then scale.** Run 100 iterations while testing, then the full number with a seed for reproducibility. Print intermediate results and predict output before running: "I expect this generally to be 0 or 3. 1s and 2s are possible. 1 is extremely unlikely." [RCode_2023-11-16 10-01-35.txt @ 00:51:42]. Force edge cases instead of waiting for chance: "I don't want to wait 38 times expected to see if it does or not." [RCode_2023-11-07 10-00-13.txt @ 00:12:47]
- **Tool trouble, least invasive fix first:** paste the code and the error, check versions ("So the first thing is, is R updated?" [Statistics_2023-10-09_12-29-32.txt @ 00:05:58]), retry, then verify in the real system (the GitHub repository). When nothing works cleanly: "We're going to kind of Frankenstein this together." [Statistics_2023-10-12_10-15-01.txt @ 00:42:49]
- **Compute one data point by hand** to show what a transformation or function does.

**Data work (R, pandas, Excel)**
- **The denominator question:** "what is your denominator? Is your denominator the total for that day of week, or is your denominator the total for that delivery method?" [Statistics_2023-10-12_10-15-01.txt @ 00:10:13]. Filtering too early makes every group 100 percent.
- Rename columns before merging, and filter once after merging instead of four times before. In R, the dot in lm() means all other columns; don't name a variable "residuals" (it is a function); rerun a notebook from the top after a rename.
- A random number from 0 to 1 is a rectangle of area 1: "So this is a uniform distribution being sampled between 0 and 1, so 52% of the area will be between 0 and .52." [RCode_2023-11-16 10-01-35.txt @ 00:22:17]
- **Excel.** VLOOKUP needs an absolute reference on the table array (TRUE for approximate match); show why by breaking it on purpose ("Now what happens if you tack on, let's say, like the number 7 to the student ID or something?" [Excel_2023-10-08_18-03-36.txt @ 00:25:12]). Pivot tables are not live; refresh them. Verify a SUMIF by highlighting the range and reading the status bar. Excel and Python are also fine as quick calculators or as models the student can poke at.
- **Check assumptions, not just results;** word violations for the write-up.

**Menus, version control and AI**
- **SPSS, JMP and other menus:** narrate the click path, try options to see what they do, and cut the output down to the cells that matter.
- **Git:** "you stage your changes with adding and then you commit the changes." [Statistics_2023-10-09_12-29-32.txt @ 00:19:55]
- **Check AI-generated code** for errors. Admit weak syntax memory and go to past work: "I always forget the syntax for this" [RCode_2023-10-10_09-01-05.txt @ 00:12:29]

---

## Elementary math

- **Division as skip counting:** "The number of steps it takes for us to get there is our answer." [Elementary-Math_2023-10-06_17-00-04.txt @ 00:06:45]. Skip counting is also the rescue ladder for a forgotten fact: "If you want, you can do 35 plus 7, or if you want, you can do 36 plus 6. Either way." [Math_2023-11-29 17-31-02.txt @ 00:30:46]
- **Times tables** are the reference everything else uses; drill them with ownership (each student picks a favorite table) and a contest if siblings enjoy competing. Fill only half the table, since the other half repeats; time the drill so the time goes down; ask facts out of order on purpose. Play Connect Four on the table: "in order to place a spot, you need to tell me what the multiplication is." [Math_2023-11-29 17-31-02.txt @ 00:02:57]. Close by answering "what's this for?" in the kid's world (35 pages a day for a week is 35 times 7).
- **Meaning of the operations:** multiplication stretches and division squeezes (Play-Doh, a slinky); fact families link addition to subtraction and multiplication to division; arrays show 3 x 6 = 6 x 3. Use known facts to get new ones (12 - 9 gives 13 - 9).
- **Square numbers as blocks:** each new square adds an L-shaped layer; the differences go 3, 5, 7, 9.
- **Multiples:** write skip-count lists side by side, ask what shows up in both, then test with a third list.
- **Enumerate all cases** (every way to add to 10), then ask "What do you notice about our answers?"
- **Plant seeds of later math** and reveal the purpose after the activity (fixed perimeter, the square encloses the most; the shape is a parabola).
- **Algorithms:** round-robin one problem so each child owns a column ("a difficult problem is really just a few different small problems put together." [PreAlgebra_2023-10-11_17-08-43.txt @ 00:07:04]); connect carrying and borrowing ("the 1 that we carried here ended up being the 1 that we borrowed when we were doing the subtraction." [PreAlgebra_2023-10-11_17-08-43.txt @ 00:11:53]); check by the inverse operation; instant-replay a borrow across a zero from the start.
- **Order of operations:** write what the wrong reading would mean as a different problem (3 x 2 + 1 vs 3 x (2 + 1)).
- **Decimals and fractions:** 102 = 102.0 = 102.00, the value doesn't change; only the repeating digits get the bar. Discover which fractions terminate by generating cases (reduce, factor the denominator, only 2s and 5s terminate). Fractions with brownies or pizza, the child's choice.
- **On the board:** color multi-digit multiplication by place value, draw the zero placeholder big (sometimes a smiley) and say why it is there, draw connectors in long division, turn repeated addition into multiplication with a brace, check by the inverse (7 x 9 / 9 = 7).
- Rules like "0 times anything will be 0" get said as rules. With young kids, the procedure can come first and the reason right after.
- Plain notation forward-looking: the times symbol becomes x the variable later. Translate odd worksheet vocabulary; often the child knows the algorithm and only the word is new.
- **Handwriting:** "it doesn't have to be perfect. It just has to be good enough." [PreAlgebra_2023-11-04 16-06-57.txt @ 00:22:37]

---

## Reading and other subjects

- **Reading.** The board treats a pasted story as a canvas: vocabulary underlined in color, a colored letter code in the margin by paragraph, word roots spelled out ("tri-cycle - 3 wheeled bike," "tri-ple - 3 of a thing"). Decide with the student who reads aloud; dyslexic students may need you to read. Let siblings co-author a practice story (each adds a power or trait), then take turns on comprehension and vocabulary questions. For vocabulary, ask the child for a usage example, and use a silly physical one: "Did you guys ever heard of whoopee cushions? That would be mischievous." [Reading_2023-12-01 17-33-06.txt @ 00:21:22]
- **Science.** General law first (F = m·a), free-body diagram, then numbers; color each vector component the same in the text and the calculation. Chemistry reactions as passing objects from a "reactants hand" to a "products hand." With kids: states of matter on a number line (look up honey's freezing point live); seasons come from tilt, not distance ("In fact, our winter, we are a little bit closer to the sun now than in our summer." [Science_2023-12-08 17-29-34.txt @ 00:40:54]); Pluto through the three-part planet definition. Give an exact number only when you have it, otherwise a range: "It's about 140 million miles But it's anywhere from 34 million to 250 million" [Science_2023-12-08 17-29-34.txt @ 00:46:08]
- **Kinesiology and other unfamiliar courses.** Read the course materials together, define terms by their parts ("Like, variant means change, in means doesn't." [Kineisiology_2023-12-12 17-59-09.txt @ 00:15:55]), and hang each concept on an everyday example (breathing and heartbeat for parallel processing; blitz chess for response selection).
- **AI literacy with kids.** Make prompting a reading and typing lesson: "The important thing is to be able to specify as close to exactly what you want as possible." [AI_2023-11-01_17-02-31.txt @ 00:53:05]. Stay honest when the generated material has a flaw.
