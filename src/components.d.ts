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
    }
    interface OagContent {
    }
    interface OagFigure {
        "caption": string;
        "maxWidth": 'inner' | 'outer';
        "reference": string;
    }
    interface OagHero {
        "backgroundImage": string;
        "backgroundOverlay": string;
        "caption": string;
        "headline": string;
    }
    interface OagHorizontalGallery {
        "images": Array<GalleryItem> | string;
    }
    interface OagInformation {
    }
    interface OagMap {
        "backgroundLayer": 'orthophoto' | 'standard' | 'grau' | 'osm';
    }
    interface OagReference {
        "label": string;
        "referenceCode": string;
    }
    interface OagTooltip {
        "icon": 'none' | 'information' | 'help' | 'person' | 'alert' | 'pin' | 'time';
        "x": string;
        "y": string;
    }
}
export interface OagMapCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOagMapElement;
}
declare global {
    interface HTMLOagApplicationElement extends Components.OagApplication, HTMLStencilElement {
    }
    var HTMLOagApplicationElement: {
        prototype: HTMLOagApplicationElement;
        new (): HTMLOagApplicationElement;
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
    interface HTMLOagInformationElement extends Components.OagInformation, HTMLStencilElement {
    }
    var HTMLOagInformationElement: {
        prototype: HTMLOagInformationElement;
        new (): HTMLOagInformationElement;
    };
    interface HTMLOagMapElement extends Components.OagMap, HTMLStencilElement {
    }
    var HTMLOagMapElement: {
        prototype: HTMLOagMapElement;
        new (): HTMLOagMapElement;
    };
    interface HTMLOagReferenceElement extends Components.OagReference, HTMLStencilElement {
    }
    var HTMLOagReferenceElement: {
        prototype: HTMLOagReferenceElement;
        new (): HTMLOagReferenceElement;
    };
    interface HTMLOagTooltipElement extends Components.OagTooltip, HTMLStencilElement {
    }
    var HTMLOagTooltipElement: {
        prototype: HTMLOagTooltipElement;
        new (): HTMLOagTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "oag-application": HTMLOagApplicationElement;
        "oag-content": HTMLOagContentElement;
        "oag-figure": HTMLOagFigureElement;
        "oag-hero": HTMLOagHeroElement;
        "oag-horizontal-gallery": HTMLOagHorizontalGalleryElement;
        "oag-information": HTMLOagInformationElement;
        "oag-map": HTMLOagMapElement;
        "oag-reference": HTMLOagReferenceElement;
        "oag-tooltip": HTMLOagTooltipElement;
    }
}
declare namespace LocalJSX {
    interface OagApplication {
    }
    interface OagContent {
    }
    interface OagFigure {
        "caption"?: string;
        "maxWidth"?: 'inner' | 'outer';
        "reference"?: string;
    }
    interface OagHero {
        "backgroundImage"?: string;
        "backgroundOverlay"?: string;
        "caption"?: string;
        "headline"?: string;
    }
    interface OagHorizontalGallery {
        "images"?: Array<GalleryItem> | string;
    }
    interface OagInformation {
    }
    interface OagMap {
        "backgroundLayer"?: 'orthophoto' | 'standard' | 'grau' | 'osm';
        "onReadyMap"?: (event: OagMapCustomEvent<Map>) => void;
    }
    interface OagReference {
        "label"?: string;
        "referenceCode"?: string;
    }
    interface OagTooltip {
        "icon"?: 'none' | 'information' | 'help' | 'person' | 'alert' | 'pin' | 'time';
        "x"?: string;
        "y"?: string;
    }
    interface IntrinsicElements {
        "oag-application": OagApplication;
        "oag-content": OagContent;
        "oag-figure": OagFigure;
        "oag-hero": OagHero;
        "oag-horizontal-gallery": OagHorizontalGallery;
        "oag-information": OagInformation;
        "oag-map": OagMap;
        "oag-reference": OagReference;
        "oag-tooltip": OagTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "oag-application": LocalJSX.OagApplication & JSXBase.HTMLAttributes<HTMLOagApplicationElement>;
            "oag-content": LocalJSX.OagContent & JSXBase.HTMLAttributes<HTMLOagContentElement>;
            "oag-figure": LocalJSX.OagFigure & JSXBase.HTMLAttributes<HTMLOagFigureElement>;
            "oag-hero": LocalJSX.OagHero & JSXBase.HTMLAttributes<HTMLOagHeroElement>;
            "oag-horizontal-gallery": LocalJSX.OagHorizontalGallery & JSXBase.HTMLAttributes<HTMLOagHorizontalGalleryElement>;
            "oag-information": LocalJSX.OagInformation & JSXBase.HTMLAttributes<HTMLOagInformationElement>;
            "oag-map": LocalJSX.OagMap & JSXBase.HTMLAttributes<HTMLOagMapElement>;
            "oag-reference": LocalJSX.OagReference & JSXBase.HTMLAttributes<HTMLOagReferenceElement>;
            "oag-tooltip": LocalJSX.OagTooltip & JSXBase.HTMLAttributes<HTMLOagTooltipElement>;
        }
    }
}
