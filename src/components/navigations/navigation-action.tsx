import { Plus } from "lucide-react";

import ActionTooltip from "@/components/action-tooltip";
import { openModal } from "@/features/modal-slice";
import * as Constants from "@/lib/constants";
import { useDispatch } from "react-redux";

const NavigationAction = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            openModal({
                type: Constants.MODAL_TYPE_CREATE_SERVER,
            }),
        );
    };

    return (
        <div>
            <ActionTooltip
                align={Constants.TOOLTIP_ALIGN_CENTER}
                label={Constants.TOOLTIP_LABEL_ADD_SERVER}
                side={Constants.TOOLTIP_SIDE_RIGHT}
            >
                <button
                    className="group flex items-center"
                    onClick={handleClick}
                >
                    <div className="mx-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-[24px] bg-background transition-all group-hover:rounded-[16px] group-hover:bg-emerald-500 dark:bg-neutral-700">
                        <Plus
                            className="text-emerald-500 transition group-hover:text-white"
                            width={25}
                        />
                    </div>
                </button>
            </ActionTooltip>
        </div>
    );
};

export default NavigationAction;
