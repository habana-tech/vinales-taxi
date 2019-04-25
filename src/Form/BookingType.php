<?php

namespace App\Form;

use App\Entity\Booking;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\DataMapper\RadioListMapper;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
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
            ->add('peopleCount', null, ['attr'=>['min'=>1, 'max'=>40, 'placeholder'=>1, 'value'=>1]])
            ->add('pickupDate', DateType::class, ['widget'=>'single_text', 'attr'=>['min'=>date('Y-m-d')]])
            //->add('pickupTime', TimeType::class, ['widget'=>'single_text'])
            ->add('pickupTime', ChoiceType::class,[
                'choices'=>[
                    '7:00 am'=>'07:00',
                    '7:30 am'=>'07:30',
                    '8:00 am'=>'08:00',
                    '8:30 am'=>'08:30',
                    '9:00 am'=>'09:00'
                ],'expanded'=>false
            ])

            ->add('pickupPlace', ChoiceType::class,[
                'choices'=>[
                    'Airport'=>'Airport',
                    'Cruise'=>'Cruise',
                    'Hotel or House'=>'Hotel or House'
                ],'expanded'=>true
            ])
            ->add('pickupDetails')


            ->add('clientName')
            ->add('clientEmail')
            ->add('telephone')
            ->add('clientMessage', TextareaType::class)

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
