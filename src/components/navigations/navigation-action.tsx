import { Plus } from "lucide-react";

import * as Constants from "@/lib/constants";
import ActionTooltip from "@/components/action-tooltip";
import { openModal } from "@/features/modal-slice";
import { useDispatch } from "react-redux";

const NavigationAction = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            openModal({
                type: Constants.MODAL_TYPE_CREATE_SERVER,
            })
        );
    };

    return (
        <div>
            <ActionTooltip
                align={Constants.TOOLTIP_ALIGN_CENTER}
                label={Constants.TOOLTIP_LABEL_ADD_SERVER}
                side={Constants.TOOLTIP_SIDE_RIGHT}
            >
                <button className="group flex items-center" onClick={handleClick}>
                    <div className="h-12 w-12 mx-3 flex justify-center items-center rounded-[24px] group-hover:rounded-[16px] overflow-hidden transition-all bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
                        <Plus className="group-hover:text-white text-emerald-500 transition" width={25} />
                    </div>
                </button>
            </ActionTooltip>
        </div>
    );
};

export default NavigationAction;
