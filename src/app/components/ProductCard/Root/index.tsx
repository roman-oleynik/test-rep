import React, { useState } from 'react';
import { Product } from 'app/types';
import './style.scss';
import { AddToCartButton } from '../AddToCartButton';
import { ProductCodeSection } from '../ProductCodeSection';
import { Avatar } from '../Avatar';
import { CardTextContent } from '../CardTextContent';
import { MeasureUnits } from '../../../types';
import { Prices } from '../Prices';
import { MeasureUnitSwitcher } from '../MeasureUnitSwitcher';
import { Tooltip } from '../Tooltip';
import { AmountInput } from '../AmountInput';
type Props = {
    data: Product
};



export function ProductCard({ data }: Props) {
    const [ measureUnit, setMeasureUnit ] = useState<MeasureUnits>(MeasureUnits.SqMeter);
    const [ amount, setAmount ] = useState<number>(1);

    const handleSpinButtonClick = (EO: React.SyntheticEvent<HTMLButtonElement>) => {
        const dir = (EO.target as HTMLButtonElement).dataset.spinDir;
        console.log((EO.target as HTMLButtonElement).dataset)
        if ( dir === "up" ) {
            setAmount(amount + 1);
        } else if ( dir === "down" ) {
            setAmount(amount - 1);
        }
    };
    const handleMeasureUnitSwitch = (EO: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = EO.target;
        if ( value === "m2" ) {
            setMeasureUnit(MeasureUnits.SqMeter);
        }
        if ( value === "pack" ) {
            setMeasureUnit(MeasureUnits.Pack);
        }
    };


    return <section className='product-card mt-20'>
        <ProductCodeSection
            code={data.code}
            isActive={data.isActive}
        />
        <Avatar
            src={data.primaryImageUrl}
        />
        <CardTextContent
            title={data.title}
            associatedProducts={data.assocProducts}
        />
        <div className="product-card__right-column">
            <Prices
                measureUnit={measureUnit}
                discountPricePerSqMeter={+data.priceGoldAlt.toFixed(1)}
                discountPricePerPack={data.priceGold}
                retailPricePerSqMeter={+data.priceRetailAlt.toFixed(1)}
                retailPricePerPack={data.priceRetail}
            />
            <MeasureUnitSwitcher
                measureUnit={measureUnit}
                setMeasureUnit={handleMeasureUnitSwitch}
            />
            <Tooltip
                unit={data.unitFull}
                unitAlt={data.unitAlt}
                amountOfUnits={+(data.unitRatioAlt*5).toFixed(1)}
            />
            <form className="product-card__interactive">
                <AmountInput
                    value={amount}
                    setValue={handleSpinButtonClick}
                />
                <AddToCartButton product={data.productId}><>В КОРЗИНУ</></AddToCartButton>
            </form>

        </div>

    </section>
}