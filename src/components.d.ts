/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { GalleryItem } from "./models/gallery-item";
import { Map } from "ol";
export { GalleryItem } from "./models/gallery-item";
export { Map } from "ol";
export namespace Components {
    interface OagApplication {
        "desktopOnly": boolean;
        "desktopOptimized": boolean;
        "loadedDelay": number;
    }
    interface OagChangelogEntry {
        "label": string;
        "tags": string;
    }
    interface OagChangelogVersion {
        "date": string;
        "version": string;
    }
    interface OagContent {
    }
    interface OagFigure {
        "caption": string;
        "maxWidth": 'inner' | 'outer';
        "reference": string;
    }
    interface OagGallery {
        "images": Array<GalleryItem> | string;
        "preview": boolean;
    }
    interface OagHero {
        "backgroundImage": string;
        "backgroundOverlay": string;
        "caption": string;
        "headline": string;
        "scrollIndicator": boolean;
        "scrollIndicatorLabel": string;
    }
    interface OagHorizontalGallery {
        "images": Array<GalleryItem> | string;
    }
    interface OagImageComparison {
        "labelLeft": string;
        "labelRight": string;
        "sliderIconPosition"?: any;
        "sliderPosition": number;
        "sliderWidth": number;
        "srcLeft": string;
        "srcRight": string;
    }
    interface OagImprint {
    }
    interface OagInformation {
    }
    interface OagLightbox {
        "caption": string;
    }
    interface OagLoading {
        "label": string;
        "text": string;
    }
    interface OagMap {
        "backgroundLayer": 'orthophoto' | 'standard' | 'grau' | 'osm';
        "disableTouchClass": boolean;
    }
    interface OagMisc {
        "image": string;
        "label": string;
        "tagline": string;
    }
    interface OagReference {
        "content": 'quelle' | 'literatur';
        "label": string;
        "referenceCode": string;
    }
    interface OagScreenBackgroundLayerItem {
        "active": boolean;
        "slug": string;
    }
    interface OagScreenContentLayerItem {
        "color": string;
        "hide": boolean;
        "slug": string;
    }
    interface OagScreenMap {
        "backgroundLayer": 'orthophoto' | 'standard' | 'grau' | 'osm';
        "disableTouchClass": boolean;
        "labelClose": string;
        "labelOpen": string;
        "opened": boolean;
    }
    interface OagTooltip {
        "icon": 'none' | 'information' | 'help' | 'person' | 'alert' | 'pin' | 'time';
        "initialShow": boolean;
        "x": string;
        "y": string;
    }
}
export interface OagApplicationCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOagApplicationElement;
}
export interface OagMapCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOagMapElement;
}
export interface OagScreenContentLayerItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOagScreenContentLayerItemElement;
}
export interface OagScreenMapCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOagScreenMapElement;
}
declare global {
    interface HTMLOagApplicationElement extends Components.OagApplication, HTMLStencilElement {
    }
    var HTMLOagApplicationElement: {
        prototype: HTMLOagApplicationElement;
        new (): HTMLOagApplicationElement;
    };
    interface HTMLOagChangelogEntryElement extends Components.OagChangelogEntry, HTMLStencilElement {
    }
    var HTMLOagChangelogEntryElement: {
        prototype: HTMLOagChangelogEntryElement;
        new (): HTMLOagChangelogEntryElement;
    };
    interface HTMLOagChangelogVersionElement extends Components.OagChangelogVersion, HTMLStencilElement {
    }
    var HTMLOagChangelogVersionElement: {
        prototype: HTMLOagChangelogVersionElement;
        new (): HTMLOagChangelogVersionElement;
    };
    interface HTMLOagContentElement extends Components.OagContent, HTMLStencilElement {
    }
    var HTMLOagContentElement: {
        prototype: HTMLOagContentElement;
        new (): HTMLOagContentElement;
    };
    interface HTMLOagFigureElement extends Components.OagFigure, HTMLStencilElement {
    }
    var HTMLOagFigureElement: {
        prototype: HTMLOagFigureElement;
        new (): HTMLOagFigureElement;
    };
    interface HTMLOagGalleryElement extends Components.OagGallery, HTMLStencilElement {
    }
    var HTMLOagGalleryElement: {
        prototype: HTMLOagGalleryElement;
        new (): HTMLOagGalleryElement;
    };
    interface HTMLOagHeroElement extends Components.OagHero, HTMLStencilElement {
    }
    var HTMLOagHeroElement: {
        prototype: HTMLOagHeroElement;
        new (): HTMLOagHeroElement;
    };
    interface HTMLOagHorizontalGalleryElement extends Components.OagHorizontalGallery, HTMLStencilElement {
    }
    var HTMLOagHorizontalGalleryElement: {
        prototype: HTMLOagHorizontalGalleryElement;
        new (): HTMLOagHorizontalGalleryElement;
    };
    interface HTMLOagImageComparisonElement extends Components.OagImageComparison, HTMLStencilElement {
    }
    var HTMLOagImageComparisonElement: {
        prototype: HTMLOagImageComparisonElement;
        new (): HTMLOagImageComparisonElement;
    };
    interface HTMLOagImprintElement extends Components.OagImprint, HTMLStencilElement {
    }
    var HTMLOagImprintElement: {
        prototype: HTMLOagImprintElement;
        new (): HTMLOagImprintElement;
    };
    interface HTMLOagInformationElement extends Components.OagInformation, HTMLStencilElement {
    }
    var HTMLOagInformationElement: {
        prototype: HTMLOagInformationElement;
        new (): HTMLOagInformationElement;
    };
    interface HTMLOagLightboxElement extends Components.OagLightbox, HTMLStencilElement {
    }
    var HTMLOagLightboxElement: {
        prototype: HTMLOagLightboxElement;
        new (): HTMLOagLightboxElement;
    };
    interface HTMLOagLoadingElement extends Components.OagLoading, HTMLStencilElement {
    }
    var HTMLOagLoadingElement: {
        prototype: HTMLOagLoadingElement;
        new (): HTMLOagLoadingElement;
    };
    interface HTMLOagMapElement extends Components.OagMap, HTMLStencilElement {
    }
    var HTMLOagMapElement: {
        prototype: HTMLOagMapElement;
        new (): HTMLOagMapElement;
    };
    interface HTMLOagMiscElement extends Components.OagMisc, HTMLStencilElement {
    }
    var HTMLOagMiscElement: {
        prototype: HTMLOagMiscElement;
        new (): HTMLOagMiscElement;
    };
    interface HTMLOagReferenceElement extends Components.OagReference, HTMLStencilElement {
    }
    var HTMLOagReferenceElement: {
        prototype: HTMLOagReferenceElement;
        new (): HTMLOagReferenceElement;
    };
    interface HTMLOagScreenBackgroundLayerItemElement extends Components.OagScreenBackgroundLayerItem, HTMLStencilElement {
    }
    var HTMLOagScreenBackgroundLayerItemElement: {
        prototype: HTMLOagScreenBackgroundLayerItemElement;
        new (): HTMLOagScreenBackgroundLayerItemElement;
    };
    interface HTMLOagScreenContentLayerItemElement extends Components.OagScreenContentLayerItem, HTMLStencilElement {
    }
    var HTMLOagScreenContentLayerItemElement: {
        prototype: HTMLOagScreenContentLayerItemElement;
        new (): HTMLOagScreenContentLayerItemElement;
    };
    interface HTMLOagScreenMapElement extends Components.OagScreenMap, HTMLStencilElement {
    }
    var HTMLOagScreenMapElement: {
        prototype: HTMLOagScreenMapElement;
        new (): HTMLOagScreenMapElement;
    };
    interface HTMLOagTooltipElement extends Components.OagTooltip, HTMLStencilElement {
    }
    var HTMLOagTooltipElement: {
        prototype: HTMLOagTooltipElement;
        new (): HTMLOagTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "oag-application": HTMLOagApplicationElement;
        "oag-changelog-entry": HTMLOagChangelogEntryElement;
        "oag-changelog-version": HTMLOagChangelogVersionElement;
        "oag-content": HTMLOagContentElement;
        "oag-figure": HTMLOagFigureElement;
        "oag-gallery": HTMLOagGalleryElement;
        "oag-hero": HTMLOagHeroElement;
        "oag-horizontal-gallery": HTMLOagHorizontalGalleryElement;
        "oag-image-comparison": HTMLOagImageComparisonElement;
        "oag-imprint": HTMLOagImprintElement;
        "oag-information": HTMLOagInformationElement;
        "oag-lightbox": HTMLOagLightboxElement;
        "oag-loading": HTMLOagLoadingElement;
        "oag-map": HTMLOagMapElement;
        "oag-misc": HTMLOagMiscElement;
        "oag-reference": HTMLOagReferenceElement;
        "oag-screen-background-layer-item": HTMLOagScreenBackgroundLayerItemElement;
        "oag-screen-content-layer-item": HTMLOagScreenContentLayerItemElement;
        "oag-screen-map": HTMLOagScreenMapElement;
        "oag-tooltip": HTMLOagTooltipElement;
    }
}
declare namespace LocalJSX {
    interface OagApplication {
        "desktopOnly"?: boolean;
        "desktopOptimized"?: boolean;
        "loadedDelay"?: number;
        "onLoaded"?: (event: OagApplicationCustomEvent<void>) => void;
    }
    interface OagChangelogEntry {
        "label"?: string;
        "tags"?: string;
    }
    interface OagChangelogVersion {
        "date"?: string;
        "version"?: string;
    }
    interface OagContent {
    }
    interface OagFigure {
        "caption"?: string;
        "maxWidth"?: 'inner' | 'outer';
        "reference"?: string;
    }
    interface OagGallery {
        "images"?: Array<GalleryItem> | string;
        "preview"?: boolean;
    }
    interface OagHero {
        "backgroundImage"?: string;
        "backgroundOverlay"?: string;
        "caption"?: string;
        "headline"?: string;
        "scrollIndicator"?: boolean;
        "scrollIndicatorLabel"?: string;
    }
    interface OagHorizontalGallery {
        "images"?: Array<GalleryItem> | string;
    }
    interface OagImageComparison {
        "labelLeft"?: string;
        "labelRight"?: string;
        "sliderIconPosition"?: any;
        "sliderPosition"?: number;
        "sliderWidth"?: number;
        "srcLeft"?: string;
        "srcRight"?: string;
    }
    interface OagImprint {
    }
    interface OagInformation {
    }
    interface OagLightbox {
        "caption"?: string;
    }
    interface OagLoading {
        "label"?: string;
        "text"?: string;
    }
    interface OagMap {
        "backgroundLayer"?: 'orthophoto' | 'standard' | 'grau' | 'osm';
        "disableTouchClass"?: boolean;
        "onReadyMap"?: (event: OagMapCustomEvent<Map>) => void;
    }
    interface OagMisc {
        "image"?: string;
        "label"?: string;
        "tagline"?: string;
    }
    interface OagReference {
        "content"?: 'quelle' | 'literatur';
        "label"?: string;
        "referenceCode"?: string;
    }
    interface OagScreenBackgroundLayerItem {
        "active"?: boolean;
        "slug"?: string;
    }
    interface OagScreenContentLayerItem {
        "color"?: string;
        "hide"?: boolean;
        "onHideLayer"?: (event: OagScreenContentLayerItemCustomEvent<string>) => void;
        "onHighlightLayer"?: (event: OagScreenContentLayerItemCustomEvent<string>) => void;
        "onShowLayer"?: (event: OagScreenContentLayerItemCustomEvent<string>) => void;
        "slug"?: string;
    }
    interface OagScreenMap {
        "backgroundLayer"?: 'orthophoto' | 'standard' | 'grau' | 'osm';
        "disableTouchClass"?: boolean;
        "labelClose"?: string;
        "labelOpen"?: string;
        "onReadyMap"?: (event: OagScreenMapCustomEvent<Map>) => void;
        "opened"?: boolean;
    }
    interface OagTooltip {
        "icon"?: 'none' | 'information' | 'help' | 'person' | 'alert' | 'pin' | 'time';
        "initialShow"?: boolean;
        "x"?: string;
        "y"?: string;
    }
    interface IntrinsicElements {
        "oag-application": OagApplication;
        "oag-changelog-entry": OagChangelogEntry;
        "oag-changelog-version": OagChangelogVersion;
        "oag-content": OagContent;
        "oag-figure": OagFigure;
        "oag-gallery": OagGallery;
        "oag-hero": OagHero;
        "oag-horizontal-gallery": OagHorizontalGallery;
        "oag-image-comparison": OagImageComparison;
        "oag-imprint": OagImprint;
        "oag-information": OagInformation;
        "oag-lightbox": OagLightbox;
        "oag-loading": OagLoading;
        "oag-map": OagMap;
        "oag-misc": OagMisc;
        "oag-reference": OagReference;
        "oag-screen-background-layer-item": OagScreenBackgroundLayerItem;
        "oag-screen-content-layer-item": OagScreenContentLayerItem;
        "oag-screen-map": OagScreenMap;
        "oag-tooltip": OagTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "oag-application": LocalJSX.OagApplication & JSXBase.HTMLAttributes<HTMLOagApplicationElement>;
            "oag-changelog-entry": LocalJSX.OagChangelogEntry & JSXBase.HTMLAttributes<HTMLOagChangelogEntryElement>;
            "oag-changelog-version": LocalJSX.OagChangelogVersion & JSXBase.HTMLAttributes<HTMLOagChangelogVersionElement>;
            "oag-content": LocalJSX.OagContent & JSXBase.HTMLAttributes<HTMLOagContentElement>;
            "oag-figure": LocalJSX.OagFigure & JSXBase.HTMLAttributes<HTMLOagFigureElement>;
            "oag-gallery": LocalJSX.OagGallery & JSXBase.HTMLAttributes<HTMLOagGalleryElement>;
            "oag-hero": LocalJSX.OagHero & JSXBase.HTMLAttributes<HTMLOagHeroElement>;
            "oag-horizontal-gallery": LocalJSX.OagHorizontalGallery & JSXBase.HTMLAttributes<HTMLOagHorizontalGalleryElement>;
            "oag-image-comparison": LocalJSX.OagImageComparison & JSXBase.HTMLAttributes<HTMLOagImageComparisonElement>;
            "oag-imprint": LocalJSX.OagImprint & JSXBase.HTMLAttributes<HTMLOagImprintElement>;
            "oag-information": LocalJSX.OagInformation & JSXBase.HTMLAttributes<HTMLOagInformationElement>;
            "oag-lightbox": LocalJSX.OagLightbox & JSXBase.HTMLAttributes<HTMLOagLightboxElement>;
            "oag-loading": LocalJSX.OagLoading & JSXBase.HTMLAttributes<HTMLOagLoadingElement>;
            "oag-map": LocalJSX.OagMap & JSXBase.HTMLAttributes<HTMLOagMapElement>;
            "oag-misc": LocalJSX.OagMisc & JSXBase.HTMLAttributes<HTMLOagMiscElement>;
            "oag-reference": LocalJSX.OagReference & JSXBase.HTMLAttributes<HTMLOagReferenceElement>;
            "oag-screen-background-layer-item": LocalJSX.OagScreenBackgroundLayerItem & JSXBase.HTMLAttributes<HTMLOagScreenBackgroundLayerItemElement>;
            "oag-screen-content-layer-item": LocalJSX.OagScreenContentLayerItem & JSXBase.HTMLAttributes<HTMLOagScreenContentLayerItemElement>;
            "oag-screen-map": LocalJSX.OagScreenMap & JSXBase.HTMLAttributes<HTMLOagScreenMapElement>;
            "oag-tooltip": LocalJSX.OagTooltip & JSXBase.HTMLAttributes<HTMLOagTooltipElement>;
        }
    }
}
