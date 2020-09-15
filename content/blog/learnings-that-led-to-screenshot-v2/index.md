---
title: Learnings that led to Screenshot v2 (3-5x speed improvement over v1)
date: "2020-09-15T12:00:00.000Z"
description: In this post we are sharing the learnings from mechanism v1 that laid the base for v2.
author: Manoj Vivek
authorPic: /assets/img/blog-authors/manoj-vivek.jpeg
authorTwitterUrl: https://twitter.com/vivek_jonam
---

Responsively App's screenshot functionality was powered by the mechanism v1 up until a week back. This mechanism had some performance problems and occasional misalignments in the full-page screenshots. In this post we will talk about the process we went through in making it better.

#### Screen capture challenges in Chromium

By design, Chromium only allows to **screen capture** the viewport visible portion of the rendered webpage. So you cannot capture the elements that are not visible on the viewport.

## Screenshot Mechanism v1

To overcome the above challenge, v1 mechanism was designed based on the logic followed by most of the screens capturing browser extensions. For the sake of simplicity, here I'm cutting down some nitty-gritty details in it.
Steps:

1. Identify the screen viewport dimensions and rendered page dimensions.
2. Starting from the top-left of the page, repeatedly do the following until it reaches the bottom-right of the page.
   1. Capture the visible portion of the page.
   2. Scroll the page to the end of current viewport and repeat from the previous step.
3. Once all the portions of the page are captured, we will stitch the images to form the final image.

<br/>
<div class="BlogPost__image-wrapper">
  <img height="600px" src="/assets/img/blog/screenshot-mechanism-v1.png" alt="Screenshot Mechanism v1" title="Screenshot Mechanism v1"/>
  <span>Screenshot Mechanism v1</span>
</div>
<br/>
<br/>
<br/>

## Problems in mechanism v1

Over time, we faced the following problems with the above-described mechanism:

1. The performance is unbearable for huge pages where we have to do a lot of scrolling and capturing. And then we need to stitch these images together, even though we used the best available libraries for doing this, this is so much image processing.
2. The final output has some misaligned/overlapped portions. This is mainly caused by lazy loaded content/dynamic elements on the page that get displayed based on the scroll position. This change in the page height was messing with the final stitched image.

## Mechanism v2

In v2, we took a completely different approach than the usual screenshotting logic. We avoided the high CPU intensive work by _eliminating the iterative capturing and stitching_. This became possible because we use Chromium's `webview` for rendering the device previews.

1. We do the initial full page scroll to make any lazy loaded content rendered on the screen. And then get the height of the page.
2. Temporarily change the height of the `webview` to the height of the page. Now the full page is inside the device's viewport.
3. Now it is possible that the page is tall and might get hidden below the Main window's viewport. So we apply zoom out to the device until it fits in the Main window's viewport.
4. Do a screen capture. This will give us the full page screenshot.
5. Reset the device viewport height and zoom level.

Please check the illustration below for a better understanding.

<br/>
<div class="BlogPost__image-wrapper">
  <img height="400px" src="/assets/img/blog/screenshot-mechanism-v2.png" alt="Screenshot Mechanism v2" title="Screenshot Mechanism v2"/>
  <span>Screenshot Mechanism v2</span>
</div>
<br/>
<br/>
<br/>

## Few other minor changes that improved the speed

1. Previously we were capturing the images and then adding a white background while processing it. Yes, Chromium produces the screenshot with transparent background if there is no background set for the page. So we removed that additional step to process the image with white background overlay by setting a `background-color: white;` style for the document `body` before triggering the capture and removing it after.
2. We changed the final output to `jpeg` format instead of `png` and found it faster. Chromium captures the image into a `NativeImage` object which has to be converted to one of the usable formats.

<br />

Here is the [pull request](https://github.com/responsively-org/responsively-app/pull/425) for this improvement. Please share your thoughts, if any, there.
