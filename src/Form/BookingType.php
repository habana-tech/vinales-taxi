<?php

namespace App\Form;

use App\Entity\Booking;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\DataMapper\RadioListMapper;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\RadioType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class BookingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('peopleCount', null, ['attr'=>['min'=>1, 'max'=>40, 'placeholder'=>1, 'value'=>1], 'label'=>'field.peopleCount'])
            ->add('pickupDate', DateType::class, ['widget'=>'single_text', 'attr'=>['min'=>date('Y-m-d')],'label'=>'field.pickupDate'])
            //->add('pickupTime', TimeType::class, ['widget'=>'single_text'])
            ->add('pickupTime', ChoiceType::class,[
                'choices'=>[
                    '7:00 am'=>'07:00',
                    '7:30 am'=>'07:30',
                    '8:00 am'=>'08:00',
                    '8:30 am'=>'08:30',
                    '9:00 am'=>'09:00'
                ],'expanded'=>false,'label'=>'field.pickupTime'
            ])

            ->add('pickupPlace', ChoiceType::class,[
                'choices'=>[
                    'option.Airport'=>'Airport',
                    'option.Cruise'=>'Cruise',
                    'option.Hotel'=>'Hotel or House'
                ],'expanded'=>true, 'label'=>'field.pickupPlace'
            ])
            ->add('pickupDetails',null, ['label'=>'field.pickupDetails'])


            ->add('clientName', null, ['label'=>'field.name'])
            ->add('clientEmail',EmailType::class, ['label'=>'field.email'])
            ->add('telephone', null, ['label'=>'field.telephone'])
            ->add('clientMessage', TextareaType::class, [
                'required' => false, 'label'=>'field.clientMessage'
            ])

            ->add('bookingLang', HiddenType::class)
            ->add('campaign',HiddenType::class)

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Booking::class,
        ]);
    }
}
