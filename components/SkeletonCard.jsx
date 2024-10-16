import React from 'react';
import { Skeleton } from 'antd';

function SkeletonCard() {
    return (
        <Skeleton.Node
            active={true}
            style={{
                width: "160px",
                backgroundColor: '#bfbfbf',
                height: "150px",
            }}
        >
            <div className="px-6 pt-[40px] pb-4 w-full h-full flex flex-col justify-end">
                <Skeleton.Input active={true} size="small" className="w-full h-[12px] mb-2 overflow-hidden" />
                <Skeleton.Input active={true} size="small" className="w-full h-[10px] overflow-hidden" />
            </div>
        </Skeleton.Node>
    );
}

export default SkeletonCard;
