// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../../types";
import * as utilities from "../../utilities";

import {ObjectMeta} from "../../meta/v1";

export class PeerAuthentication extends pulumi.CustomResource {
    /**
     * Get an existing PeerAuthentication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PeerAuthentication {
        return new PeerAuthentication(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:security.istio.io/v1beta1:PeerAuthentication';

    /**
     * Returns true if the given object is an instance of PeerAuthentication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PeerAuthentication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PeerAuthentication.__pulumiType;
    }

    public readonly apiVersion!: pulumi.Output<"security.istio.io/v1beta1">;
    public readonly kind!: pulumi.Output<"PeerAuthentication">;
    public readonly metadata!: pulumi.Output<k8s.types.output.meta.v1.ObjectMeta>;
    /**
     * PeerAuthentication defines how traffic will be tunneled (or not) to the sidecar.
     */
    public readonly spec!: pulumi.Output<outputs.security.v1beta1.PeerAuthenticationSpec>;
    public readonly status!: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a PeerAuthentication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PeerAuthenticationArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            inputs["apiVersion"] = "security.istio.io/v1beta1";
            inputs["kind"] = "PeerAuthentication";
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["spec"] = args ? args.spec : undefined;
            inputs["status"] = args ? args.status : undefined;
        } else {
            inputs["apiVersion"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["metadata"] = undefined /*out*/;
            inputs["spec"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(PeerAuthentication.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a PeerAuthentication resource.
 */
export interface PeerAuthenticationArgs {
    readonly apiVersion?: pulumi.Input<"security.istio.io/v1beta1">;
    readonly kind?: pulumi.Input<"PeerAuthentication">;
    readonly metadata?: pulumi.Input<ObjectMeta>;
    /**
     * PeerAuthentication defines how traffic will be tunneled (or not) to the sidecar.
     */
    readonly spec?: pulumi.Input<inputs.security.v1beta1.PeerAuthenticationSpecArgs>;
    readonly status?: pulumi.Input<{[key: string]: any}>;
}
